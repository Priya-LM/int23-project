var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Priya:Q7dVQvyEedqrVajU@login0.atcyqnu.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
app.get("/sign_up",(req,res)=>{

    return res.sendFile(__dirname+"/signup.html");
})
app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;


    var data = {
        "name": name,
        "email" : email,
        "password" : password,
        "confirmPassword":  confirmPassword
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect("/sign_up_success");
})
app.get("/sign_up_success",(req,res)=>{

    return res.sendFile(__dirname+"/signup-success.html");
})
app.listen(3000,(req,res)=>{
 console.log("Server started ")

})

