const CryptoJS = require('crypto-js');
const DES = CryptoJS.DES;
const Base64 = CryptoJS.enc.Base64;
const Utf8 = CryptoJS.enc.Utf8;

const ciphertext="/wxuLRQBdL/y9PtuBJS8Lw==";
const cipherArray=Base64.parse(ciphertext);
const keyHex=Utf8.parse("password");

const decrypted = DES.decrypt({
 ciphertext: cipherArray
}, keyHex,{
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});

console.log(decrypted.toString(Utf8));