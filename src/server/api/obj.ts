import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { Payload } from "../def.js";

const canteenObjRouter = Router();

const canteenObjValidator = [
    body('name').isString(),
    body('price').isNumeric(),
    body('image').isBase64(),
];

canteenObjRouter.post('/create', canteenObjValidator, (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(StatusCodes.BAD_REQUEST)
            .json(new Payload(false, result.array()));
        
        return;
    }

    res.sendStatus(StatusCodes.OK);
});


export default canteenObjRouter;