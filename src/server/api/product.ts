import { Router } from "express";
import { body } from "express-validator";

const productRouter = Router();

productRouter.post('create',
    body('productName')
    .isString(),
    (req, res) => {
        
});


export default productRouter;