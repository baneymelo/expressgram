const mongoose = require("mongoose");
const KEY = require("./config");

mongoose.connect(KEY.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection;

db.on('open', _ => {
    console.log("Connection open");
})
