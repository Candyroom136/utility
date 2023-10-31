import requests


def get_headers(access_token: str):
    return {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }


def get_scripts(access_token: str, mall_id: str):
    uri = f"https://{mall_id}.cafe24api.com/api/v2/admin/scripttags"

    headers = get_headers(access_token=access_token)

    res = requests.get(uri, headers=headers)
    return res.json()
