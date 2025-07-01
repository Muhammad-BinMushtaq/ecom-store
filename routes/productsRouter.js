const express=require('express')
const router=express.Router();

router.get('/',function(req,res){
    res.send("welcome to products section ")
})

module.exports=router