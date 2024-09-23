import { useEffect, useMemo, useState } from 'react';
import {
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';
import { useTheme } from 'next-themes';

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
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
};

export default function Technologies() {
  const technologies = [
    // React
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    // Tailwind
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png',
    // PostgreSQL
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
    // MongoDB
    'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png',
    // GRPC
    'https://grpc.io/img/logos/grpc-icon-color.png',
    // Redis
    'https://cdn.iconscout.com/icon/free/png-256/free-redis-4-1175103.png',
    // RabbitMQ
    'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg',
    // Nginx
    'https://d4.alternativeto.net/rzVs59edzRVa55KMDeoptD3jkE1Ulv-DycWvE_c4nkw/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9uZ2lueF8xMDIwMzUucG5n.png',
  ];
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  const iconSlugs = [
    'nestjs',
    'javascript',
    'typescript',
    'docker',
    'githubactions',
    'kubernetes',
    'python',
    'csharp',
    'cplusplus',
    'react',
    'tailwindcss',
    'postgresql',
    'mongodb',
    'grpc',
    'redis',
    'rabbitmq',
    'nginx',
    '1password'
  ];

  useEffect(() => {
    fetchSimpleIcons({slugs: iconSlugs}).then(setData);
    console.log(data);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return [];

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    <ul className="technologies z-[-1] hidden sm:flex">
      {renderedIcons.map((technology, index) => (
        <li key={index} className={`left-${index} duration-[${index * 250}]`}>
          {technology}
        </li>
      ))}
    </ul>
  );
}
