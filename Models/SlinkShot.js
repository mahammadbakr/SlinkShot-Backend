const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const SlinkShotSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    user:{
        type:objId,
        ref: 'User'
    },
    userDetails:{
        type:objId,
        ref: 'UserDetails'
    },
    description:{
        type:String,
        trim:true
    },
    videoUrl:{
        type:String,
        trim:true
    },
    like:{
        type:Number,
        trim:true,
        default:0
    },
    viewNumber:{
        type:Number,
        trim:true,
        default:0
    },
    createdDate : { 
        type : Date,
         default: Date.now 
    }
     
})


const  slinkShot=mongoose.model('Slink',SlinkShotSchema)
module.exports=slinkShot;