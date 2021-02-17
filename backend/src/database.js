import mongoose from "mongoose";
import config from "./config";

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
/*     .then(_ => console.log('DB is connected'))
    .catch(err => console.log(err)) */

const db = mongoose.connection;

db.on('open', _ => {
    console.log("Connection open");
})
