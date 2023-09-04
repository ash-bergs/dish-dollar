# Backend for Dish Dollar 💰🍽️

Dish Dollar's backend is built to support the operations and data management needs of the Dish Dollar application. This project leverages [Prisma](https://www.prisma.io/) for database operations and [Docker](https://www.docker.com/) for containerized development and deployment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Database Operations](#database-operations)
- [Testing](#testing)
- [Models](#models)
- [Contributing](#contributing)

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- Yarn package manager

## Setup

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Start the Dockerized Database**:
   ```bash
   yarn db-start
   ```

## Database Operations

1. **Generate Prisma Client**:

   ```bash
   yarn prisma-generate
   ```

2. **Run Migrations**:

   ```bash
   yarn prisma-migrate
   ```

3. **Seed the Database**:

   ```bash
   yarn prisma-seed
   ```

4. **Reset the Database**:

   ```bash
   yarn prisma-reset
   ```

5. **Stop the Dockerized Database**:
   ```bash
   yarn db-stop
   ```

## Testing

We use [vitest](https://vitest.dev/) as our testing framework. Run tests with:

```bash
yarn test
```

## Models

- **User**: Represents individual users with fields such as email, name, profile picture, and associated recipes.
- **Pantry**: Contains information related to a user's pantry and its ingredients.
- **PantryIngredient**: Holds details about specific ingredients in a pantry, including quantities and units.
- **Ingredient**: Represents various ingredients used in recipes.
- **RecipeIngredient**: Links ingredients to recipes and details about their quantities and substitutions.
- **Recipe**: Describes individual recipes, their categories, ratings, preparation time, costs, and associated instructions.

---
