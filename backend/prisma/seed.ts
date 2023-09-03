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

  // Get all ingredients
  const ingredients = await prisma.ingredient.findMany();

  // Create a pantry for user with id 1
  const pantry = await prisma.pantry.create({
    data: {
      userId: 1,
    },
  });

  // Use a subset of ingredients to populate the pantry
  for (const ingredient of ingredients.slice(0, 16)) {
    const initialAmount = Math.round(Math.random() * 20 + 5);

    await prisma.pantryIngredient.create({
      data: {
        pantryId: pantry.id,
        ingredientId: ingredient.id,
        initialAmount: initialAmount,
        quantityInStock: Math.random(),
        unit: 'unit',
      },
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
