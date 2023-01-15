let express = require('express');
let app = express();
let port = 9600;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb+srv://comrade-sakshi:<sakshi>@cluster0.x852hi4.mongodb.net/?retryWrites=true&w=majority";
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


 app.get('/login',(req,res) => {
    db.collection('login').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })


 // subscription update
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



//login update
app.put('/login/:id',(req,res) => {
    let lid = Number(req.params.id);
    db.collection('login').updateOne(
        {loginid:lid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) =>{
            if(err) throw err;
            res.send('Logined successfully.')
        }
    )
})
// watchlist
app.post('/watchlist',(req,res) => {
    db.collection('serial').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Added')
    })
})

//delete watchlist
app.delete('/deletewatchlist/:_id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('serial').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Watchlist Deleted')
    })
})


// connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,code) => {
    if(err) console.log('Error while connecting');
    db = code.db('movies');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})

