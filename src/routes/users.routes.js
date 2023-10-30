import { Router } from "express";
import { validateAuth } from "../middlewares/auth.middlewares.js";
import { getUser, getUserServices } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get('/users/me', validateAuth, getUser);
usersRouter.get('/user/services/:id', validateAuth, getUserServices); //trocar de services para posts

export default usersRouter;