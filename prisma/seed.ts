import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@example.com", password: "hashedpassword" },
      { name: "Bob", email: "bob@example.com", password: "hashedpassword" },
    ],
  });
}

main()
  .then(() => console.log("Seed data inserted"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());