const express = require('express')

const app = express()// server instance create krr rahe hai

app.get("/", (req,res)=>{
    res.send("hello world")
})



app.listen(3000)// server ko start karne k liye