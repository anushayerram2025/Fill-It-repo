const express=require('express');
const router = express.Router();


router.get("/:userId",(req,res)=>{
    res.send("USDETAILSSS")
})

module.exports=router;