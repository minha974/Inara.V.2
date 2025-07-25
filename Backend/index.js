
const express = require("express");
const dotenv = require("dotenv");
const app = express() 
const PORT = 6000;
const database = require('./src/assets/database')
app.use(express.json());
dotenv.config()
const user = require('./src/routes/user');
app.use('/api/user',user)


app.listen(PORT,()=>{
    console.log(`API is listening on ${PORT}`);
});
