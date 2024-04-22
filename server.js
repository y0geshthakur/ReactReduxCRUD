const express=require('express');
const mongoose=require('mongoose');
var cors=require('cors');

const app=express();
const port=5000;
app.use(cors());
app.use(express.json());

const url='mongodb://127.0.0.1:27017/customers';
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true});
// mongoose.connect(url);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connection established');
})

const customerRouter =require('./routes/customers');
app.use('/customers',customerRouter);

app.listen(port,()=>{
    console.log(`server running at port:${port}`);
})