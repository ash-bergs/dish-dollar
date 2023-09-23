# Dish-Dollar

Dish-Dollar is an all-in-one solution for individuals seeking to streamline their home cooking and shopping experience. With a user-friendly interface built with Next.js and Chakra UI, Dish-Dollar assists you in building staple menus, generating shopping lists, and keeping track of your pantry items effortlessly.

## Features

1. **Pantry Management:** Keep track of what you have in stock, and even specify quantities. No more trying to recall if you have that special ingredient in the back of your pantry.

2. **Recipe Suggestions:** Based on the ingredients you have in stock, get a list of recipes you can whip up without a last-minute store run.

3. **Cost Tracking:** Record the cost of each grocery item. Over time, get an idea of how much each dish costs you to make. Budgeting made easy!

4. **Seasonal Shopping:** Future implementations will suggest recipes based on seasonal ingredients, guiding you towards healthier, environmentally-friendly, and potentially cost-saving choices.

## Tech Stack

- **Frontend:** Next.js with Chakra UI for a responsive and intuitive UI.
- **Backend:** Robust backend infrastructure with Prisma, tested with Vitest.

## Directory Structure

The project is structured as a monorepo with distinct directories for frontend and backend:

- **frontend:** Contains all UI components, pages, and frontend logic.
- **backend:** Houses the backend logic, database models, and API routes.

## Getting Started

To get the project running locally:

1. Clone the repository.
2. Navigate to the root of the monorepo.

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Use the provided scripts to run the frontend or backend:

### Scripts

From the base of the monorepo, the following scripts are available:

- **Run Frontend Development Server:**

  ```bash
  yarn frontend-dev
  ```

- **Initialize Backend Development Environment:**
  ```bash
  yarn backend-dev
  ```

This script starts the backend database, runs Prisma migrations, and seeds the database with initial data if any.

## License

This project is licensed under the MIT License.

---

Thank you for considering Dish-Dollar for your home cooking and shopping needs. If you encounter any issues or have suggestions, please raise an issue on our GitHub page. Happy cooking! 🍳🥘🥗
