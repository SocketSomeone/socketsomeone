import { useRouter } from "next/router";

export default function LanguageSwitcher() {
	const router = useRouter();
	const { locale, asPath } = router;

	const toggleLanguage = () => {
		const newLocale = locale === "en" ? "ru" : "en";

		router.push(asPath, asPath, { locale: newLocale });
	};

	return (
		<button className='ml-4' onClick={toggleLanguage}>
			{locale === "en" ? "Русский" : "English"}
		</button>
	);
}
