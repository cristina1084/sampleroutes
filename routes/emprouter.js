var exp = require('express');
const route = exp.Router();    

route.get("/",(req,res)=>{
    res.render("employee")
})

route.get("/new",(req,res)=>{
    res.render("newemp")
})

route.get("/view",(req,res)=>{
    res.send("View Employees")
})

route.get("/del",(req,res)=>{
    res.send("Delete Employees")
})

route.get("/edit",(req,res)=>{
    res.send("Edit Employees")
})


module.exports=route;