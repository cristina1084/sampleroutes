var exp = require('express');
const router = exp.Router();

router.get("/",(req,res)=>{
    res.render("product")
})

router.get("/new",(req,res)=>{
    res.render("newproduct")
})

router.get("/view",(req,res)=>{
    res.send("View Products")
})

router.get("/del",(req,res)=>{
    res.send("Delete Products")
})

router.get("/edit",(req,res)=>{
    res.send("Edit Products")
})

router.get("/new/ret",(req,res)=>{
    res.send("Retail Products")
})

router.get("/new/whole",(req,res)=>{
    res.send("Whole Sale Products")
})

module.exports=router;