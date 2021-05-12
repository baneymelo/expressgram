const KEY = require('./config');
const app = require('./app');

require("./database");

app.listen(KEY.PORT || 5000, () =>{
    console.log('listening on port %s', KEY.PORT)
});
