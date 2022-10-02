const defaultLintConfig = require("@project/eslint-config");
const tsOverride = require("@project/eslint-config/libs/typescript");

module.exports = {
    ...defaultLintConfig,
    ignorePatterns: [".eslintrc.js"],

    overrides: [tsOverride],
    //     globals: {
    //         ethers: "readonly",
    //     },
};

// module.exports = {
//     ...tsConfigEslint,
//     root: true,
//     parserOptions: {
//         project: "./tsconfig.json",
//         ecmaVersion: 2020,
//         sourceType: "module",
//     },
//     // plugins: ["import"],
// };
