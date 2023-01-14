
let express = require('express');
let app = express();
let port = 9600;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb://localhost:27017";
let db;

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.send('<h1>Hii From Express</h1>')
})

app.get('/action',(req,res) => {
   db.collection('action').find().toArray((err,result) => {
       if(err) throw err;
       res.send(result)
   })
})


app.get('/hollywood',(req,res) => {
    db.collection('hollywood').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })
 
 
 app.get('/cartoon',(req,res) => {
    db.collection('cartoon').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })
 
 app.get('/trending',(req,res) => {
    db.collection('trending').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })
 

 app.get('/serial',(req,res) => {
    db.collection('serial').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })
 

 app.get('/collection',(req,res) => {
    db.collection('collection').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })


 app.get('/subscription',(req,res) => {
    db.collection('subscription').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })

 app.post('/subscription',(req,res) => {
    db.collection('subscription').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Subscribed')
    })
})
app.get('/subscribed',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query={email:email}
    }else{
        query={}
    }
    db.collection('subscription').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error while connecting');
    db = dc.db('movies');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})
