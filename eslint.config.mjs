import { FlatCompat }    from '@eslint/eslintrc';
import { dirname }       from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript'],
	}),
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'object-curly-spacing': ['error', 'always']
		},
	},
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
			'public/**',
		],
	},
];

export default eslintConfig
