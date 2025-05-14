// jest.config.js
export default {
  testEnvironment: "node",
  transform: {},
  testMatch: ["**/?(*.)+(test).mjs"], // 👈 เพิ่มตรงนี้ให้ Jest หาเจอ .mjs
};
