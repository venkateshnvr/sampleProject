import react, { useEffect, useState } from "react";

export default function Cryptojs() {
    let [encrypt, setEncrypt] = useState("");
    let [decrypt, setDecrypt] = useState("");
    let [encryptText, setEncryptText] = useState("")
    let [decryptText, setDecryptText] = useState("")

    let encryptHandler = () => {
        let option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ encrypt: encrypt })
        }
        fetch("http://localhost:5000/crypto/encrypt", option)
            .then(response => response.json())
            .then(res => setEncryptText(res))
            .catch(err => console.log(err))
    }

    let decryptHandler = () => {
        let option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ decrypt: decrypt })
        }
        fetch("http://localhost:5000/crypto/decrypt", option)
            .then(response => response.json())
            .then(res => setDecryptText(res))
            .catch(err => console.log(err))
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Task 1</h1>
            <input type="text" placeholder="Encrypt" value={encrypt} onChange={(e) => setEncrypt(e.target.value)} />
            <button onClick={() => encryptHandler()}>Encrypt</button>
            <br />
            <input type="text" placeholder="Decrypt" value={decrypt} onChange={(e) => setDecrypt(e.target.value)} />
            <button onClick={() => decryptHandler()}>Decrypt</button>
            <h1>display Data</h1>
            <div>
                <h1>{encryptText.text}</h1>
            </div>
            <div>
                <h1>{decryptText.text}</h1>
            </div>
        </div>
    )
}