import * as ctrUser from "../controllers/user.controller.js";
import { Router } from "express";

const routerUser = Router();

routerUser.post("/", ctrUser.crearCuenta);


export default routerUser;