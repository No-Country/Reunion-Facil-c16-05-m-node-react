import express from 'express';
import morgan from 'morgan';
const app = express();

//middleware 
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {

    res.send('<h1>server</h1>')

})






export default app;