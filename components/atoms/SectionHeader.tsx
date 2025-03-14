type Props = {
	title: string;
	subtitle?: string;
}

export default function SectionHeader({title, subtitle}: Props) {
	return (
		<>
			<h1 className="font-semibold text-center text-3xl text-gray-900 dark:text-white">{title}</h1>

			{subtitle && <p className="text-center text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>}
		</>
	);
}
