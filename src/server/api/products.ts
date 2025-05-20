import { Router } from "express";
import { body } from "express-validator";

const productsRouter = Router();

productsRouter.post('/createProduct',
    body('productID')
    (req, res) => {

});