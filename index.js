const dotenv = require ('dotenv').config()
const express = require('express')
const app = express()
const port =( process.env.PORT)
const connectDB =require("./db/datab.js");
connectDB()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('login successful')
})
app.get('/signup',(req,res)=>{
    res.send('logout successful')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})