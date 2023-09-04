import { PrismaClient } from '@prisma/client';
import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';
// https://vitest.dev/api/#vi-mock

beforeEach(() => {
  mockReset(prisma);
});

const prisma = mockDeep<PrismaClient>();
export default prisma;
// "fake" client exports the deep mock of PrismaClient
