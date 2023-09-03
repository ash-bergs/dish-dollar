/*
  Warnings:

  - You are about to drop the column `ingredientId` on the `Pantry` table. All the data in the column will be lost.
  - You are about to drop the column `quantityInStock` on the `Pantry` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pantry" DROP CONSTRAINT "Pantry_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "Pantry" DROP CONSTRAINT "Pantry_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_userId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_recipeId_fkey";

-- AlterTable
ALTER TABLE "Pantry" DROP COLUMN "ingredientId",
DROP COLUMN "quantityInStock";

-- CreateTable
CREATE TABLE "PantryIngredient" (
    "id" SERIAL NOT NULL,
    "pantryId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantityInStock" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PantryIngredient_pkey" PRIMARY KEY ("id")
);
