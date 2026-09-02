import { createRequire } from 'node:module';

const load = createRequire(import.meta.url);
const { version: reactVersion } = load('react/package.json');

const config = {
	"plugins": ["eslint", "typescript", "react", "jsx-a11y", "import", "nextjs"],
	"categories": {
		"correctness": "off"
	},
	"jsPlugins": [
		{
			"name": "perfectionist",
			"specifier": "eslint-plugin-perfectionist"
		},
		{
			"name": "next-compat",
			"specifier": "@next/eslint-plugin-next"
		},
		{
			"name": "react-hooks-compat",
			"specifier": "eslint-plugin-react-hooks"
		},
		{
			"name": "react-compat",
			"specifier": "eslint-plugin-react"
		},
		{
			"name": "stylistic-compat",
			"specifier": "@stylistic/eslint-plugin"
		}
	],
	"env": {
		"browser": true,
		"node": true
	},
	"settings": {
		"react": {
			"version": reactVersion
		}
	},
	"ignorePatterns": [
		"node_modules/**",
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		"public/**"
	],
	"rules": {
		"nextjs/google-font-display": "warn",
		"nextjs/google-font-preconnect": "warn",
		"nextjs/inline-script-id": "error",
		"nextjs/next-script-for-ga": "warn",
		"nextjs/no-assign-module-variable": "error",
		"nextjs/no-async-client-component": "warn",
		"nextjs/no-before-interactive-script-outside-document": "warn",
		"nextjs/no-css-tags": "warn",
		"nextjs/no-document-import-in-page": "error",
		"nextjs/no-duplicate-head": "error",
		"nextjs/no-head-element": "warn",
		"nextjs/no-head-import-in-document": "error",
		"nextjs/no-html-link-for-pages": "error",
		"nextjs/no-img-element": "warn",
		"next-compat/no-location-assign-relative-destination": "warn",
		"nextjs/no-page-custom-font": "warn",
		"nextjs/no-script-component-in-head": "error",
		"nextjs/no-styled-jsx-in-document": "warn",
		"nextjs/no-sync-scripts": "error",
		"nextjs/no-title-in-document-head": "warn",
		"nextjs/no-typos": "warn",
		"nextjs/no-unwanted-polyfillio": "warn",
		"typescript/ban-ts-comment": "error",
		"eslint/no-array-constructor": "error",
		"typescript/no-duplicate-enum-values": "error",
		"typescript/no-empty-object-type": "error",
		"typescript/no-explicit-any": "error",
		"typescript/no-extra-non-null-assertion": "error",
		"typescript/no-misused-new": "error",
		"typescript/no-namespace": "error",
		"typescript/no-non-null-asserted-optional-chain": "error",
		"typescript/no-require-imports": "error",
		"typescript/no-this-alias": "error",
		"typescript/no-unnecessary-type-constraint": "error",
		"typescript/no-unsafe-declaration-merging": "error",
		"typescript/no-unsafe-function-type": "error",
		"eslint/no-unused-expressions": [
			"warn",
			{
				"allowShortCircuit": false,
				"allowTaggedTemplates": false,
				"allowTernary": false
			}
		],
		"eslint/no-unused-vars": [
			"warn",
			{
				"args": "after-used",
				"caughtErrors": "none",
				"ignoreRestSiblings": false,
				"vars": "all"
			}
		],
		"typescript/no-wrapper-object-types": "error",
		"typescript/prefer-as-const": "error",
		"typescript/prefer-namespace-keyword": "error",
		"typescript/triple-slash-reference": "error",
		"import/no-anonymous-default-export": "warn",
		"jsx-a11y/alt-text": [
			"warn",
			{
				"elements": ["img"],
				"img": ["Image"]
			}
		],
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
		"react-hooks-compat/config": "error",
		"react/error-boundaries": "error",
		"react/exhaustive-deps": "warn",
		"react-hooks-compat/gating": "error",
		"react/globals": "error",
		"react/immutability": "error",
		"react/incompatible-library": "warn",
		"react/preserve-manual-memoization": "error",
		"react/purity": "error",
		"react/refs": "error",
		"react/rules-of-hooks": "error",
		"react/set-state-in-effect": "error",
		"react/set-state-in-render": "error",
		"react/static-components": "error",
		"react/unsupported-syntax": "warn",
		"react/use-memo": "error",
		"react/display-name": "error",
		"react/jsx-key": "error",
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-target-blank": "off",
		"react/jsx-no-undef": "error",
		"react-compat/jsx-uses-react": "error",
		"react-compat/jsx-uses-vars": "error",
		"react/no-children-prop": "error",
		"react/no-danger-with-children": "error",
		"react-compat/no-deprecated": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-is-mounted": "error",
		"react/no-render-return-value": "error",
		"react/no-string-refs": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": "off",
		"react/no-unsafe": "off",
		"react/react-in-jsx-scope": "off",
		"react/require-render-return": "error",
		"stylistic-compat/object-curly-spacing": ["error", "always"],
		"perfectionist/sort-array-includes": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-classes": "off",
		"perfectionist/sort-decorators": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-enums": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-export-attributes": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-exports": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-heritage-clauses": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-import-attributes": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-imports": [
			"error",
			{
				"type": "line-length",
				"order": "desc",
				"ignoreCase": true,
				"specialCharacters": "keep",
				"internalPattern": ["^~/.+"],
				"partitionByComment": false,
				"partitionByNewLine": false,
				"newlinesBetween": 1,
				"tsconfig": {
					"rootDir": "."
				},
				"groups": [
					"type-import",
					["builtin", "value-external"],
					"type-internal",
					"value-internal",
					{ "newlinesBetween": 0 },
					["type-parent", "type-sibling", "type-index"],
					"ts-equals-import",
					"unknown"
				],
				"environment": "node"
			}
		],
		"perfectionist/sort-interfaces": "off",
		"perfectionist/sort-intersection-types": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-jsx-props": "off",
		"perfectionist/sort-maps": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-modules": "off",
		"perfectionist/sort-named-exports": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-named-imports": "off",
		"perfectionist/sort-object-types": "off",
		"perfectionist/sort-objects": "off",
		"perfectionist/sort-sets": ["error", { "type": "alphabetical", "order": "asc" }],
		"perfectionist/sort-switch-case": "off",
		"perfectionist/sort-union-types": "off",
		"perfectionist/sort-variable-declarations": ["error", { "type": "alphabetical", "order": "asc" }]
	},
	"overrides": [
		{
			"files": ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
			"rules": {
				"eslint/no-var": "error",
				"eslint/prefer-const": [
					"error",
					{
						"destructuring": "any",
						"ignoreReadBeforeAssign": false
					}
				],
				"eslint/prefer-rest-params": "error",
				"eslint/prefer-spread": "error"
			}
		}
	]
};

export default config;
