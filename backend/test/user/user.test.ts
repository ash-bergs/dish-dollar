import { expect, describe, it } from 'vitest';
import prisma from '../../libs/__mocks__/prisma';
import { User } from '@prisma/client';

const userData: User = {
  id: 1,
  email: 'test@example.com',
  name: 'Test User',
  picture: null,
  githubId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const updatedUserData: User = {
  id: 1,
  email: 'updated-email@example.com',
  name: 'Updated User',
  picture: null,
  githubId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('User Model', () => {
  it('should create a new user', async () => {
    // mock user.create method
    prisma.user.create.mockResolvedValue(userData);

    const user = await prisma.user.create({ data: userData });

    expect(user.email).toBe(userData.email);
    expect(user.name).toBe(userData.name);
  });
  it('should find a user by id', async () => {
    // mock user.findUnique method
    prisma.user.findUnique.mockResolvedValue(userData);

    // value * can * be null if the user is not found
    // we will write a test for rejected promises later
    // type assertion to User type for type safety
    const user = (await prisma.user.findUnique({ where: { id: 1 } })) as User;

    expect(user.email).toBe(userData.email);
    expect(user.name).toBe(userData.name);
  });
  it("should update a user's information", async () => {
    // mock user.update method
    prisma.user.update.mockResolvedValue(updatedUserData);

    const user = await prisma.user.update({
      where: { id: 1 },
      data: updatedUserData,
    });

    expect(user.email).toBe(updatedUserData.email);
    expect(user.name).toBe(updatedUserData.name);
  });
});
