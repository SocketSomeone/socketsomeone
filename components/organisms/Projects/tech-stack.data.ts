export type TechStackItem = {
	name: string;
	slug: string;
	featured?: boolean;
};

export type TechStackGroup = {
	title: string;
	description: string;
	variant: 'hero' | 'default' | 'compact';
	items: TechStackItem[];
};

export const techStackGroups: TechStackGroup[] = [
	{
		title: 'Core stack',
		description: 'The technologies I reach for first when building products and platform tooling.',
		variant: 'hero',
		items: [
			{ name: 'TypeScript', slug: 'typescript', featured: true },
			{ name: 'Node.js', slug: 'nodedotjs', featured: true },
			{ name: 'NestJS', slug: 'nestjs', featured: true },
			{ name: 'React', slug: 'react', featured: true },
			{ name: 'Next.js', slug: 'nextdotjs', featured: true },
		],
	},
	{
		title: 'Infrastructure',
		description: 'Deployment, runtime and automation tools I use to ship and operate services.',
		variant: 'default',
		items: [
			{ name: 'Docker', slug: 'docker' },
			{ name: 'Kubernetes', slug: 'kubernetes' },
			{ name: 'Nginx', slug: 'nginx' },
			{ name: 'GitHub Actions', slug: 'githubactions' },
		],
	},
	{
		title: 'Data & Messaging',
		description: 'Storage, caching and delivery layers I regularly integrate into backend systems.',
		variant: 'default',
		items: [
			{ name: 'PostgreSQL', slug: 'postgresql' },
			{ name: 'Redis', slug: 'redis' },
			{ name: 'RabbitMQ', slug: 'rabbitmq' },
			{ name: 'GraphQL', slug: 'graphql' },
		],
	},
	{
		title: 'Also worked with',
		description: 'Additional tools and languages that show up in my day-to-day engineering work.',
		variant: 'compact',
		items: [
			{ name: 'JavaScript', slug: 'javascript' },
			{ name: 'Python', slug: 'python' },
			{ name: 'Tailwind CSS', slug: 'tailwindcss' },
			{ name: 'WebSocket', slug: 'socketdotio' },
			{ name: 'OpenAPI', slug: 'openapiinitiative' },
			{ name: 'Linux', slug: 'linux' },
			{ name: 'Git', slug: 'git' },
			{ name: 'Prometheus', slug: 'prometheus' },
		],
	},
];

export const techStackSlugs = techStackGroups.flatMap((group) =>
	group.items.map((item) => item.slug),
);
