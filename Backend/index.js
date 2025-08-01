
const express = require("express");
const dotenv = require("dotenv");
const app = express() 
const PORT = 6000;
const database = require('./src/assets/database')
app.use(express.json());
dotenv.config()
const user = require('./src/routes/user');
const company = require('./src/routes/company.routes');
const category = require('./src/routes/category.routes');
const activity = require('./src/routes/activity.routes');
app.use('/api/user',user);
app.use('/api/company',company);
app.use('/api/category',category);
app.use('/api/activity',activity);


app.listen(PORT,()=>{
    console.log(`API is listening on ${PORT}`);
});
