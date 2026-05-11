import nextVitals                      from 'eslint-config-next/core-web-vitals'
import nextTs                          from 'eslint-config-next/typescript'
import perfectionist                   from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	perfectionist.configs['recommended-alphabetical'],
	{
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'line-length',
					order: 'desc',
					ignoreCase: true,
					specialCharacters: 'keep',
					internalPattern: ['^~/.+'],
					partitionByComment: false,
					partitionByNewLine: false,
					newlinesBetween: 1,
					maxLineLength: undefined,
					tsconfig: {
						rootDir: import.meta.dirname
					},

					groups: [
						'type-import',
						['builtin', 'value-external'],
						'type-internal',
						'value-internal',
						{ newlinesBetween: 0 },
						['type-parent', 'type-sibling', 'type-index'],
						'ts-equals-import',
						'unknown'
					],

					environment: 'node'
				}
			],

			'perfectionist/sort-objects': ['off'],
			'perfectionist/sort-classes': ['off'],
			'perfectionist/sort-switch-case': ['off'],
			'perfectionist/sort-object-types': ['off'],
			'perfectionist/sort-interfaces': ['off'],
			'perfectionist/sort-union-types': ['off'],
			'perfectionist/sort-named-imports': ['off'],
			'perfectionist/sort-modules': ['off'],
			'perfectionist/sort-jsx-props': ['off'],
			'@typescript-eslint/no-explicit-any': 'off',
			'object-curly-spacing': ['error', 'always']
		},
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		'node_modules/**',
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'public/**',
	]),
])

export default eslintConfig
