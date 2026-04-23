import prisma from "../src/services/prisma.js";
import bcrypt from "bcrypt";

const hash = await bcrypt.hash("password123", 10);

async function main() {
  console.log("🌱 Seeding database...");

await prisma.user.create({
  data: {
    username: "user2",
    firstName: "Jane",
    lastName: "Smith",
    email: "user2@cinq.com",
    passwordHash: hash,
  },
});

  console.log("✅ Seeding complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });