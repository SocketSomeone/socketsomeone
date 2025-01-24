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
    'redis',
    'rabbitmq',
    'nginx'
  ];

  useEffect(() => {
    fetchSimpleIcons({slugs: iconSlugs}).then(setData);
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
