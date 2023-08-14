import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPostService = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getAllPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);
  const result = await prisma.post.findMany({
    skip,
    take,
    include: {
      author: true,
      category: true,
    },
    orderBy:
      sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
  });
  return result;
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const PostService = {
  createPostService,
  getAllPosts,
  getSinglePost,
};
