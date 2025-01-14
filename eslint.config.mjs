import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts}"],
		rules: {
			"no-console": "warn",
			"no-unused-vars": "warn",
			"array-callback-return": "error",
			"constructor-super": "warn",
			"getter-return": "error",
			"no-setter-return": "error",
			"no-const-assign": "error",
			"no-constant-binary-expression": "error",
			"no-constant-condition": "error",
			"no-constructor-return": "error",
			"no-duplicate-case": "error",
			"no-ex-assign": "error",
			"no-irregular-whitespace": "error",
			"no-self-compare": "error",
			"no-self-assign": "error",
			"no-use-before-define": "error",
			"use-isnan": "error",
			"no-useless-escape": "error",
			"no-unsafe-finally": "error",
			"valid-typeof": "error",
			"no-eq-null": "warn",
			"no-empty-static-block": "error",
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
