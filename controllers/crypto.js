const express = require("express");
const CryptoJS = require("crypto-js");
const router = express.Router()


router.post("/encrypt", (req, res) => {
    console.log(req.body)
    // Encrypt
    let ciphertext = CryptoJS.AES.encrypt(req.body.encrypt, 'secret').toString();
    res.json({text: ciphertext})
})

router.post('/decrypt', (req, res) => {
    console.log(req.body.decrypt)
    let bytes = CryptoJS.AES.decrypt(req.body.decrypt, 'secret');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText)
    res.json({text: originalText})
})



// Decrypt


// console.log(originalText);

module.exports = router;