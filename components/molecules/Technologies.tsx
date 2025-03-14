import { useEffect, useState } from 'react';
import { fetchSimpleIcons, renderSimpleIcon, SimpleIcon, } from 'react-icon-cloud';
import { useTheme } from 'next-themes';

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const iconCache = new Map<string, JSX.Element>();

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
	const cacheKey = `${icon.slug}-${theme}`;

	if (iconCache.has(cacheKey)) {
		return iconCache.get(cacheKey);
	}

	const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
	const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
	const minContrastRatio = theme === 'dark' ? 2 : 1.2;

	const rendered = renderSimpleIcon({
		icon,
		bgHex,
		fallbackHex,
		minContrastRatio,
		size: 42,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e: any) => e.preventDefault(),
		},
	});

	iconCache.set(cacheKey, rendered);
	return rendered;
};

export default function Technologies() {
	const [data, setData] = useState<IconData | null>(null);
	const {resolvedTheme} = useTheme();
	const iconSlugs = [
		'nestjs',
		'javascript',
		'typescript',
		'docker',
		'githubactions',
		'kubernetes',
		'python',
		'sharp',
		'cplusplus',
		'react',
		'tailwindcss',
		'postgresql',
		'mongodb',
		'redis',
		'rabbitmq',
		'nginx'
	];

	useEffect(() => {
		fetchSimpleIcons({slugs: iconSlugs}).then(setData);
	}, []);


		const renderedIcons = Object.values(data?.simpleIcons ?? {}).map((icon) =>
			renderCustomIcon(icon, resolvedTheme || 'light'),
		);

	return (
		<ul className="technologies z-[-1] hidden sm:flex">
			{renderedIcons.map((technology, index) => (
				<li key={`technology-${index}`} className={`left-${index} duration-[${index * 250}]`}>
					{technology}
				</li>
			))}
		</ul>
	);
}
