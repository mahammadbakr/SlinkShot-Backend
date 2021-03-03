const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const UserDetailsSchema= new mongoose.Schema({
    user:{
        type:objId,
        ref: 'User'
    },
    name:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    
    bio:{
        type:String,
        trim:true
    },
    channel:{
        type:String,
        trim:true
    },
    
    followers:[{
        type: objId,
        ref: 'User'
    }], 
    
    slinkshots:[{
        type: objId,
        ref: 'Slink'
    }], 
 
    createdDate : { 
        type : Date,
         default: Date.now 
    }
     
})


const  userDetails=mongoose.model('UserDetails',UserDetailsSchema)
module.exports=userDetails;