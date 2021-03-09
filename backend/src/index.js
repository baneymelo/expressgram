import KEY from './config'
import app from './app';
import "./database";

app.listen(KEY.PORT || 3000, () =>{
    console.log('listening on port %s', KEY.PORT)
});
