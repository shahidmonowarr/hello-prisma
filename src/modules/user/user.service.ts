import { PrismaClient, User } from "@prisma/client";

// instance
const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

export const UserService = {
  insertIntoDB,
};
