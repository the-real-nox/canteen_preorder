import { Router } from "express";
import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { Payload } from "../def.js";

const canteenObjRouter = Router();

const canteenObjValidator = body('objName').isString();

canteenObjRouter.post('/create', canteenObjValidator, (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(StatusCodes.BAD_REQUEST)
            .json(new Payload(false, result.array()));
        
        return;
    }
});


export default canteenObjRouter;