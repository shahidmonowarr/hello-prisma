import { PrismaClient } from "@prisma/client";
import app from "./app";

// instantiate PrismaClient
const prisma = new PrismaClient();

async function main() {
  const port = process.env.PORT || 3003;

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();
