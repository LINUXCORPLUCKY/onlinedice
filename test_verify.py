from curl_cffi import requests
import re

url = 'https://www.online-dice.com/verify/gC8XtWvQ1P/'
try:
    r = requests.get(url, impersonate='chrome120', timeout=15)
    print('Status:', r.status_code)
    print('Has ALL ROLLS:', 'ALL ROLLS FOR THIS GAME ID' in r.text)
    if 'ALL ROLLS FOR THIS GAME ID' in r.text:
        # Save HTML sample to inspect dice elements
        with open('verify_sample.html', 'w', encoding='utf-8') as f:
            f.write(r.text)
        print('Saved verify_sample.html successfully!')
    else:
        print('Title:', re.findall(r'<title>(.*?)</title>', r.text))
except Exception as e:
    print('Error:', e)
