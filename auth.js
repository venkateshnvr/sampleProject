const express = require("express")
var jwt = require('jsonwebtoken');


const auth = (req, res, next) =>{
    const authHeaders = req.headers['authorization']
    const token = authHeaders && authHeaders.split(" ")[1]
    jwt.verify(token, "venkatesh", (err, res) => {
        console.log(res)
        if(err) res.send("please check")
        req.data = res
        next()
    })
    // .then(data => {
    //     console.log(data)
        
    //     next()
    // })
    // .catch(err => res.status(403).send("please check token"))
}

module.exports = auth