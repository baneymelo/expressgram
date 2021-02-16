
//import HOST_PORT from '@env'
import app from "./app";
import "./database";
const PORT = 4000

app.listen(PORT, () =>{
    console.log('Listening port',PORT)
});

app.get('/', (req, res) =>{
    res.send("Server working")
})