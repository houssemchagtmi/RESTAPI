const mongoose=  require('mongoose')
const {Schema}=mongoose
const User=new Schema ({
    name:{type:String, require:true},
    age:Number,
    country:{type:String}

})
module.exports=mongoose.model('CountryUser',User)