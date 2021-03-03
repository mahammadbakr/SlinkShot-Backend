const express=require('express')
const dotenv=require('dotenv')
// const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv').config({ path: './.env' });

const app=express();

// Configration
dotenv.config({path:'./config.env'});
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
const config = require('./config')

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
  res.sendFile("/Resorces/main.html", { root: "." });
})

app.get('/about', (req, res) => {
  res.sendFile("/Resorces/about.html", { root: "." });
})

// configure api router
app.use('/api', require('./Routers/index'))
// app.use('/api/add', require('./Controller/AddRoute'))

mongoose.connect(config.mongodbUri,{useNewUrlParser: true,useUnifiedTopology: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({
  extended: false,
}));
// parse application/json
app.use(bodyparser.json());

var publicDir = require('path').join(__dirname,'/Uploads'); 
app.use(express.static(publicDir)); 

//listing the api
const PORT=process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})

