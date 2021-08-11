import react, { useState } from 'react';

export default function Login() {
    let [name, setName] = useState("");
    let [number, setNumber] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("")

    let submit = () => {
        if(name !== "" && number !== "" && email !== "" && password !== "") {
        let option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                number: number,
                email: email,
                password: password
            })
        }
        fetch('http://localhost:5000/signup', option)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
        setName("")
        setNumber("")
        setEmail("")
        setPassword("")
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/> <br />
            <input type="text" placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)} /><br />
            <input tnype="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/><br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
            <button onClick={() => submit()}>submit</button>
        </div>
    )
}


