
//import HOST_PORT from '@env'
import app from "./app";
import "./database";
import config from "./config";

app.listen(config.PORT, () =>{
    console.log('Listening port',config.PORT)
});
