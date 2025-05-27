import { Router } from "express";
import canteenObjRouter from "./obj.js";
import orderRouter from "./order.js";

const apiRouter = Router();

apiRouter.use("/obj", canteenObjRouter);

apiRouter.use("/order", orderRouter);

export default apiRouter;