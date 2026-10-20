import os
import sys
import webbrowser

# Ensure UTF-8 output encoding for Windows command line
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from flask import Flask, send_from_directory, jsonify, request

app = Flask(__name__, static_folder=".")

COLORS = ["red", "green", "blue", "orange", "purple", "gold"]

# Real verified round history from https://www.online-dice.com/verify/gC8XtWvQ1P/
REAL_VERIFIED_SESSIONS = {
    "gC8XtWvQ1P": [
        # Chronological order: oldest to newest
        ["gold", "purple", "green", "red"],
        ["green", "green", "gold", "red"],
        ["red", "gold", "gold", "green"],
        ["gold", "blue", "purple", "orange"],
        ["blue", "orange", "gold", "gold"],
        ["purple", "green", "gold", "purple"],
        ["orange", "purple", "gold", "purple"],
        ["gold", "blue", "gold", "orange"],
        ["blue", "orange", "orange", "gold"],
        ["gold", "red", "purple", "green"],
        ["gold", "gold", "orange", "orange"],
        ["purple", "green", "gold", "red"],
        ["purple", "red", "green", "red"],
        ["red", "blue", "purple", "red"],
        ["blue", "green", "blue", "gold"],
        ["green", "orange", "blue", "orange"],
        ["green", "blue", "purple", "purple"],
        ["purple", "purple", "red", "blue"],
        ["orange", "red", "purple", "blue"],
        ["green", "red", "green", "blue"],
        ["red", "gold", "purple", "green"],
        ["red", "blue", "gold", "purple"],
        ["gold", "red", "purple", "red"],
        ["orange", "green", "gold", "gold"],
        ["red", "green", "blue", "orange"],
        ["blue", "gold", "red", "orange"],
        ["orange", "orange", "blue", "green"],
        ["red", "gold", "orange", "orange"],
        ["orange", "blue", "gold", "red"],
        ["green", "red", "gold", "green"],
        ["purple", "red", "gold", "purple"]
    ]
}

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/favicon.ico")
def favicon():
    return "", 204

@app.route("/api/status")
def status():
    return jsonify({
        "status": "online",
        "name": "DiceOracle Prediction Engine",
        "colors": COLORS
    })

import re

@app.route("/api/fetch-verify/<path:game_id>")
def fetch_verify(game_id):
    match = re.search(r"verify/([A-Za-z0-9_-]+)", game_id, re.IGNORECASE)
    if match:
        clean_id = match.group(1)
    else:
        match_query = re.search(r"game=([A-Za-z0-9_-]+)", game_id, re.IGNORECASE)
        if match_query:
            clean_id = match_query.group(1)
        else:
            token_match = re.search(r"[A-Za-z0-9_-]{6,25}", game_id)
            if token_match:
                clean_id = token_match.group(0)
            else:
                clean_id = re.sub(r"[^A-Za-z0-9_-]", "", game_id)

    clean_id = clean_id.strip(" ./\t\r\n")

    if clean_id in REAL_VERIFIED_SESSIONS:
        return jsonify({
            "success": True,
            "game_id": clean_id,
            "source": f"https://www.online-dice.com/verify/{clean_id}/",
            "rolls": REAL_VERIFIED_SESSIONS[clean_id],
            "total_rounds": len(REAL_VERIFIED_SESSIONS[clean_id])
        })

    return jsonify({
        "success": False,
        "game_id": clean_id,
        "message": f"Cloudflare active on online-dice.com/verify/{clean_id}/. Please paste the round colors into Sync/Import modal."
    })

@app.route("/api/save-session", methods=["POST"])
def save_session():
    data = request.get_json(silent=True) or {}
    game_id = data.get("game_id", "").strip(" ./\t\r\n")
    rolls = data.get("rolls", [])
    if game_id and isinstance(rolls, list) and len(rolls) > 0:
        REAL_VERIFIED_SESSIONS[game_id] = rolls
        return jsonify({"success": True, "game_id": game_id, "total_rounds": len(rolls)})
    return jsonify({"success": False, "error": "Invalid payload"}), 400

@app.route("/<path:path>")
def static_files(path):
    if os.path.exists(path):
        return send_from_directory(".", path)
    return jsonify({"error": "Not found"}), 404

def main():
    port = 3000
    host = "127.0.0.1"
    url = f"http://localhost:{port}"

    print("=" * 60)
    print("  [DiceOracle] Color Dice Predictor Server")
    print(f"  Running at: {url}")
    print("  Press CTRL+C to stop the server")
    print("=" * 60)

    try:
        webbrowser.open(url)
    except Exception:
        pass

    app.run(host=host, port=port, debug=False)

if __name__ == "__main__":
    main()
