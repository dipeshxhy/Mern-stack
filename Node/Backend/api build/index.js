const express = require("express");
const mongoose=require("mongoose")
const transactionsRouter=require("./modules/transactions/router")
const userRouter=require("./modules/user/router")

//..........start of transaction api


const PORT = 3002;

// id,account, amount greather than 20000, less than 20000, by type

const app = express();
app.use(express.json())
app.use("/transactions",transactionsRouter);







//..........End of transaction api



//..........start of users api
app.use("/users",userRouter);

// app.get("",(req,res)=>{
//   res.send("Users page ")
// })



















app.listen(PORT, () => {
  console.log("Sever is running on port ", PORT);
  try {
    mongoose.connect("mongodb://localhost:27017/api build")
    console.log("Database connected successfully");
    
  } catch (error) {
    console.log("Connection failed with database",error)
  }
});
