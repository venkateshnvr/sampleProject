const express = require('express')
const dbConection = require("./db.connection")
const app = express()
const fetch = require('node-fetch');
// const server = require('http').createServer(app);

const cors = require('cors')
dbConection()


const port = process.env.port || 5000
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", require("./controllers/userForm"))
app.use("/crypto", require("./controllers/crypto"))

const server = app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
const io = require('socket.io')(server,   {cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }}); 
app.use(cors())
io.on('connection', async function (socket) {
    let data = await fetch("http://localhost:5000/alluser")
    let json = await data.json()
    let sendData = await json
    // .then(res => data = res)
    socket.emit("FromAPI", sendData);
 });