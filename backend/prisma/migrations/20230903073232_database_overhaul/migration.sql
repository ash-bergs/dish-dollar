/*
  Warnings:

  - You are about to drop the column `currentCost` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `measurementUnit` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the `CostHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientOnMenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CostHistory" DROP CONSTRAINT "CostHistory_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "IngredientOnMenuItem" DROP CONSTRAINT "IngredientOnMenuItem_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "IngredientOnMenuItem" DROP CONSTRAINT "IngredientOnMenuItem_menuItemId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "currentCost",
DROP COLUMN "measurementUnit";

-- DropTable
DROP TABLE "CostHistory";

-- DropTable
DROP TABLE "IngredientOnMenuItem";

-- DropTable
DROP TABLE "MenuItem";

-- DropTable
DROP TABLE "Restaurant";

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "id" SERIAL NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "substitutions" INTEGER[],
    "recipeId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "timeToPrepare" INTEGER NOT NULL,
    "image" TEXT,
    "averageCostPerDish" DOUBLE PRECISION NOT NULL,
    "instructions" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pantry" (
    "id" SERIAL NOT NULL,
    "quantityInStock" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "Pantry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pantry" ADD CONSTRAINT "Pantry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pantry" ADD CONSTRAINT "Pantry_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
