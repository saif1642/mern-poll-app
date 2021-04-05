const express = require('express');
const handler = require('./handlers');

const app = express();

const port = 3000;

app.get('/', (req,res)=>{
   res.send('Hello World');
})

//Error Filter
app.use(handler.notFound);

app.use(handler.errorHandler);



app.listen(port,() => {
    console.log(`Server Started at port ${port}`)
});