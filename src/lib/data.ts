// utils/data.ts
import { faker } from "@faker-js/faker";

export const generateFakeUsers = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.name.fullName(),
    balance: `$${faker.finance.amount()}`,
    email: faker.internet.email(),
    registration: faker.date.past().toISOString(),
    status: faker.helpers.arrayElement([
      "pending",
      "processing",
      "success",
      "failed",
    ]),
  }));
};
