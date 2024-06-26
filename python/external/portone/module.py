import requests, json
from datetime import datetime, timedelta

PORTONE_URL = "https://api.iamport.kr"


def get_headers(access_token: str):
    headers = {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Accept": "*/*",
        "Authorization": f"Bearer {access_token}",
    }
    return headers


def get_card_info(billing_key: str, access_token: str):
    url = f"{PORTONE_URL}/subscribe/customers/{billing_key}"
    headers = get_headers(access_token=access_token)
    res = requests.get(url, headers=headers)
    data = json.loads(res.text)
    return data


def get_order_info(order_id: str, access_token: str):
    url = f"{PORTONE_URL}/payments/{order_id}"
    headers = get_headers(access_token=access_token)

    res = requests.get(url, headers=headers)
    data = json.loads(res.text)
    return data


def get_billing_key(billingkey: str, access_token: str):
    url = f"{PORTONE_URL}/subscribe/customers/{billingkey}"
    headers = get_headers(access_token=access_token)

    res = requests.get(url, headers=headers)
    data = json.loads(res.text)
    return data


def pay_schedule(
    billing_key: str,
    access_token: str,
    email: str,
    prod_name: str,
    merchant_uid: str,
    amount: float,
    currency: str,
    custom_data: dict,
):
    now = datetime.now()

    url = f"{PORTONE_URL}/subscribe/payments/schedule"
    headers = get_headers(access_token=access_token)
    data = {
        "customer_uid": billing_key,
        "schedules": [
            {
                "merchant_uid": merchant_uid,
                "schedule_at": (now + timedelta(seconds=5)).timestamp(),
                "amount": amount,
                "currency": currency,
                "name": prod_name,
                "buyer_email": email,
                "custom_data": custom_data,
            }
        ],
    }
    res = requests.post(url, json=data, headers=headers)
    data = json.loads(res.text)
    return data
