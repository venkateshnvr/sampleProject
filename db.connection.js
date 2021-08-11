const mongoose = require('mongoose');

const url = "mongodb+srv://dbuser:dbuser@cluster0.8dogy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = () => mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log("db connection success"))
.catch(() => console.log("please check db connection"))

module.exports = connection;
