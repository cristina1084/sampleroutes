var exp = require('express');
//var bodyparser = require('body-parser');
const app = exp();
app.set("view engine","ejs");  
app.set("views","./src/views"); 
//app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render('home');
})

app.listen(8080,()=>{
    console.log("Listening");
})