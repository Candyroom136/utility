const nodeForge = require("node-forge");

let key_str = `public_key...`;

const publicKey = nodeForge.pki.publicKeyFromPem(key_str);

// 비밀번호 암호화
const password = "myPassword";
var encryptedPassword = publicKey.encrypt(password, "RSA-OAEP", {
  md: nodeForge.md.sha256.create(),
  mgf1: {
    md: nodeForge.md.sha256.create()
  }
});

console.log("암호화된 비밀번호:", nodeForge.util.encode64(encryptedPassword));