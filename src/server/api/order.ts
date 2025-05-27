import {Router} from "express";
import db from "../db/db.js";

const orderRouter = Router();

const insertItem = async (item) => {

}

orderRouter.post('/create', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
})

export default orderRouter;