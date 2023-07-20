from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding as asymmetric_padding
from cryptography.hazmat.primitives.hashes import SHA256
import base64

# 개인 키 로드
with open('private_key.pem', 'rb') as f:
    pem_private_key = f.read()
private_key = serialization.load_pem_private_key(
    pem_private_key,
    password=None
)
private_key_str = '''private_key'''


private_key = serialization.load_pem_private_key(private_key_str.encode('utf-8'), password=None)

# 암호화된 비밀번호 복호화
encrypted_password_base64 = 'encrypted_password_base64'
encrypted_password = base64.b64decode(encrypted_password_base64)

decrypted_password = private_key.decrypt(
    encrypted_password,
    asymmetric_padding.OAEP(
        mgf=asymmetric_padding.MGF1(algorithm=SHA256()),
        algorithm=SHA256(),
        label=None
    )
)

print('복호화된 비밀번호:', decrypted_password.decode())