// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import ingredientData from './seeders/ingredients.json';
import userData from './seeders/users.json';

//TODO: figure out why I couldn't use Faker in here

const prisma = new PrismaClient();

async function main() {
  for (const seed of ingredientData.ingredients) {
    await prisma.ingredient.create({
      data: seed,
    });
  }
  for (const seed of userData.users) {
    await prisma.user.create({
      data: seed,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
