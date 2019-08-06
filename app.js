var exp = require('express'); 
var prdrouter = require('./routes/prdrouter')  //import routers
var emprouter = require('./routes/emprouter')
const app = exp();
app.set("view engine","ejs");  
app.set("views","./src/views"); 

app.use("/prd",prdrouter);    //router path
app.use("/emp",emprouter)

app.get("/",(req,res)=>{
    res.render('home');
})

app.listen(8080,()=>{
    console.log("Listening");
})