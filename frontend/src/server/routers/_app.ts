import { baseProcedure, router } from '../trpc';
import { testRouter } from './test';
// import test router
export const appRouter = router({
  test: testRouter,

  i18n: baseProcedure.query(({ ctx }) => ({
    i18n: ctx.i18n,
    locale: ctx.locale,
  })),
});

export type AppRouter = typeof appRouter;
