const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(err)=>{
	console.log(err)
})

database.once('connected',()=>{
	console.log('Database Connected');
})

const app = express();

app.use(express.json())
app.use('/api',routes)

app.listen(3000,()=>{
	console.log('server is listening on port no 3000')
})