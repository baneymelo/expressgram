const KEY = require('./config');
const app = require('./app');

require("./database");

app.listen(KEY.PORT || 5000, () =>{
    console.log('http://localhost:%s', KEY.PORT)
});
