const express = require('express')
const userRoutes = require('./src/routes/user')
app=express();

//routing path

app.get('/',(req,res)=>{

    res.send('Hello World');

})

app.use('/user',userRoutes)


app.listen(3000,()=>{
    console.log("Server running");
})