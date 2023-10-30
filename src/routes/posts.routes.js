import { Router } from "express";
import { validateAuth } from "../middlewares/auth.middlewares.js";
import { createPost, changePost, removePost, getAllPosts } from "../controllers/posts.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { postsSchemas, updatePostsSchemas } from "../schemas/posts.schemas.js";

const postsRouter = Router();

postsRouter.get('/timeline', validateAuth, getAllPosts );
postsRouter.post('/timeline', validateAuth, validateSchema(postsSchemas), createPost);
postsRouter.patch('/timeline', validateAuth, validateSchema(updatePostsSchemas), changePost);
postsRouter.delete('/timeline', validateAuth, removePost);


export default postsRouter;