import { Router } from "express";
import userSchema from "../schemas/users.schemas.js";
import authSchema from "../schemas/auth.schemas.js";
import { signUp, signIn } from "../controllers/auth.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { validateUser } from "../middlewares/users.middlewares.js";
import { validateLogin } from "../middlewares/auth.middlewares.js";

const authRouter = Router();

authRouter.post('/sign-up',validateSchema(userSchema), validateUser, signUp);
authRouter.post('/',validateSchema(authSchema), validateLogin, signIn);

export default authRouter;