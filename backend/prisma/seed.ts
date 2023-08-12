// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import seedData from './seeders/restaurants.json';

const prisma = new PrismaClient();

async function main() {
  for (const restaurant of seedData.restaurants) {
    await prisma.restaurant.create({
      data: restaurant,
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
