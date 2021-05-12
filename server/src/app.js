const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

const app = express();
app.use(cors())

app.use(morgan('dev'))
app.use(express.json());

app.use('/auth', authRoutes)
app.use('/post', postRoutes)

module.exports = app;