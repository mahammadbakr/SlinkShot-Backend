const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const SkinSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    description:{
        type:String,
        required: true,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    
    createdDate : { 
        type : Date,
         default: Date.now 
    }
     
})


const  skin=mongoose.model('Skin',SkinSchema)
module.exports=skin;