const express = require('express');
const app = express();
const PORT = 4578
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://SuperSalah:Super1234@superdata.33nxbup.mongodb.net/").
then(() => {console.log("MongoDB Established Perfectly")}).catch(() => {console.log("Error connrcting to MongoDB")});

app.get('/', (req,res)=>{
    res.send('<h1 style=text-align:center >Server is Up!!!</h1>');
});

app.get('/about', (req,res)=>{
    res.send('About');
});

app.listen(3000, () =>{
    console.log(`Server running perfectly on ${PORT}`);
});