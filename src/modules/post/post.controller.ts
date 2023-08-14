import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPostService(req.body);
    res.send({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updatePostController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostService.updatePost(id, req.body);
    res.send({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deletePostController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllPostsController = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getAllPosts(options);
    res.send({
      success: true,
      message: "All posts fetched successfully",
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSinglePostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "All posts fetched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.send({
      success: true,
      message: "Result!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  createPostController,
  getAllPostsController,
  getSinglePostController,
  updatePostController,
  deletePostController,
  learnAggregateAndGrouping,
};
