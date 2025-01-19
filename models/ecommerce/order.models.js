import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:String,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
     orderItem:{
        type:[orderItemSchema],
     },
     address:{
        type:String,
        required:true
     },
     // enum m bo item aati hai jo fix hai ki yhi hongi
     status:{
        type:String,
        enum:["pending","shipped","delivered"],
        default:"pending"
     }
},{timestamps:true})
export const Order = mongoose.model("Order",orderSchema)