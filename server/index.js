require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handler = require('./handlers');

const app = express();

const port = process.env.PORT;

app.get('/', (req,res)=>{
   res.send('Hello World');
})

//Error Filter
app.use(handler.notFound);

app.use(handler.errorHandler);



app.listen(port,() => {
    console.log(`Server Started at port ${port}`)
});