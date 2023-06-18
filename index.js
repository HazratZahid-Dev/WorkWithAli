import Express  from "express";
import mongoose from "mongoose";
import routes from "./Routes/BlogsRoutes.js";

const app= Express();
 app.use(Express.json())
  app.use('/',routes)
const url='mongodb://localhost:27017/WorkWithAli'
const port=9000;

mongoose.connect(url).then(() => {
   console.log('database is successfully connected')

   app.listen(port,()=>console.log(`the server is ${port}`));

})

