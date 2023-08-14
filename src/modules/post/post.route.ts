import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.createPostController);
router.get("/", PostController.getAllPostsController);
router.get("/learn-query", PostController.learnAggregateAndGrouping);
router.get("/:id", PostController.getSinglePostController);
router.patch("/:id", PostController.updatePostController);
router.delete("/:id", PostController.deletePostController);

export const PostRoutes = router;
