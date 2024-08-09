const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const transactionSchema=new Schema({
    title:{
        type:"String",
        required:true
    },
    amount:{
        type:"Number",
        default:0
    },
    category:{
        type:"String",
default:"expense"
    },
    account:{
        type:"String",
        required:true
    }
})

module.exports=mongoose.model("Transaction",transactionSchema)