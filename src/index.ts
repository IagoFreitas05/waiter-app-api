import express from "express";
import mongoose from "mongoose";

const  app = express();
mongoose.connect("mongodb://localhost:27017").then(()=>{
  console.log("conectado ao mongo");
}).catch(()=>{
  console.log("erro ao conectar ao mongo");
});

const port = 3001;
app.listen(port, ()=> {
  console.log(`🏳️ the server is running in peace on ${port}`);
});
