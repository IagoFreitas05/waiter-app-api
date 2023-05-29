import express from "express";
import mongoose from "mongoose";
import path from "node:path";
import { router } from "./router";



mongoose.connect("mongodb://localhost:27017").then(()=> {
  const  app = express();
  const port = 3001;
  app.use(express.json());
  app.use(router);
  app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

  app.listen(port, ()=> {
    console.log(`🏳️ the server is running in peace on ${port}`);
  });

  console.log("conectado ao mongo");
}).catch(()=> {
  console.log("erro ao conectar ao mongo");
});

