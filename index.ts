import { PrismaClient } from "@prisma/client";

// instantiate PrismaClient
const prisma = new PrismaClient();

async function main() {
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);

  const postUser = await prisma.user.create({
    data: {
      name: "Shahid",
      email: "shahid@gmail.com",
    },
  });
  console.log(postUser);
}

main();
