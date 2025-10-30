import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
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
