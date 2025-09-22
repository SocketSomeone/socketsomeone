import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'use-intl';

export default function LanguageSwitcher() {
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();

	return (
		<select
			className="border rounded p-1 bg-white dark:bg-gray-800"
			value={locale}
			onChange={(e) => {
				const newLocale = e.target.value;

				router.replace(pathname, { locale: newLocale });
			}}
		>
			<option value="en">🇬🇧 English</option>
			<option value="ru">🇷🇺 Русский</option>
		</select>
	);
}
