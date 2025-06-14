import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import roblox from "eslint-plugin-roblox-ts-x";

export default tseslint.config(
	{
		languageOptions: {
			parserOptions: {
				jsx: true,
				useJSXTextNode: true,
				ecmaVersion: 2018,
				sourceType: "module",
				project: "tsconfig.json",
			},
		},
		rules: {
			"prettier/prettier": [
				"error",
				{
					endOfLine: "auto",
				},
			],
		},
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	roblox.configs.recommended,
	prettierPlugin,
);
