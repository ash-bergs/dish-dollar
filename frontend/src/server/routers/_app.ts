import { baseProcedure, router } from '../trpc';
// import test router
export const appRouter = router({
  i18n: baseProcedure.query(({ ctx }) => ({
    i18n: ctx.i18n,
    locale: ctx.locale,
  })),
});

export type AppRouter = typeof appRouter;
