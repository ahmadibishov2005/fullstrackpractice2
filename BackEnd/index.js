import express from "express"
const app=express()
import cors from "cors"
import { config } from "dotenv"
import { Schema, model, connect } from "mongoose"

app.use(express.json())
app.use(cors())
config()


app.get("/",(req,res)=>{
     res.send("Welcome Node")   
})


let ProductSchema = new Schema({
    name:String,
    price:Number,
    category:String,
    image:String
})

let ProductModel= model("clothes",ProductSchema)



app.get("/clothes", async (req,res)=>{
    let products= await ProductModel.find()
    res.send(products)
})

app.get("/clothes/:id",async (req,res)=>{
    let id=req.params.id
    let myproduct= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myproduct
    })
})


app.delete("/clothes/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Success Delete",
})
})

app.post("/clothes", async (req,res)=>{
    let newProduct= ProductModel(req.body)
   await newProduct.save()
   res.send({
     message:"Success Post",
     data:req.body
   })
})


app.put("/clothes/:id", async (req,res)=>{
    let id=req.params.id
    let updateProduct=req.body
  let updatedProduct = await ProductModel.findByIdAndUpdate({_id:id},updateProduct,{new:true})
    res.send(updatedProduct)
})

connect(process.env.mongodburl)
.then(()=>{
    console.log("connected")
})

app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})