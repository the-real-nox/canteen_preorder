import {Router} from "express";
import db from "../db/db.js";

const orderRouter = Router();

const insertItem = async (item) => {

}

orderRouter.post('/create', (res, req) =>{
    console.log(req.body);
})

export default orderRouter;