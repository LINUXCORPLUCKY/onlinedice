import re
import time
from playwright.sync_api import sync_playwright

def fetch_verify(game_id):
    url = f'https://www.online-dice.com/verify/{game_id}/'
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        )
        page = context.new_page()
        print('Navigating to', url)
        page.goto(url, wait_until='networkidle', timeout=30000)
        time.sleep(2)

        # Check if challenge exists
        title = page.title()
        print('Page title:', title)
        
        # Wait up to 10 seconds for content if needed
        for _ in range(10):
            content = page.content()
            if 'ALL ROLLS FOR THIS GAME ID' in content:
                print('Found ALL ROLLS!')
                with open('verify_scraped.html', 'w', encoding='utf-8') as f:
                    f.write(content)
                break
            time.sleep(1)

        browser.close()

if __name__ == '__main__':
    fetch_verify('gC8XtWvQ1P')
