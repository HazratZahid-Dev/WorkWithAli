import  Express  from "express";
import { deleteData, getData, postData } from "../Controller/BlogsController.js";

const routes=Express.Router();
routes.post("/new/work",postData)
routes.get("/new/work",getData)
 routes.delete('/new/work/delete/:id',deleteData)

export default routes;