import { z } from 'zod';
import { baseProcedure, router } from '../trpc';

export const testRouter = router({
  allIngredients: baseProcedure.query(({ ctx }) => {
    return ctx.prisma.ingredient.findMany();
  }),
});
