import { Router } from "express";
import canteenObjRouter from "./obj.js";

const apiRouter = Router();

apiRouter.use("/obj", canteenObjRouter);

export default apiRouter;