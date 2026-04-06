import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет анкету клиента в Telegram."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))

    name = body.get('name', '—')
    contact = body.get('contact', '—')
    room_type = body.get('roomType', '—')
    budget = body.get('budget', '—')
    consultation_type = body.get('consultationType', '—')

    text = (
        "☘ <b>Новая анкета Revival</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Контакт:</b> {contact}\n"
        f"🏠 <b>Помещение:</b> {room_type}\n"
        f"💰 <b>Бюджет:</b> {budget}\n"
        f"🤝 <b>Консультация:</b> {consultation_type}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }