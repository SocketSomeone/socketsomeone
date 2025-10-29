import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { deepmerge } from "deepmerge-ts";

type Messages = Record<string, any>

const messagesFile = [
	'common',
	'home'
];

async function loadMessage(locale: string): Promise<Messages> {
	const imports = messagesFile.map(file =>
		import(`../messages/${locale}/${file}.json`));

	const messagesArray = await Promise.all(imports);

	const messagesObjects = messagesArray.map(m => m.default);

	return deepmerge(...messagesObjects) as Messages;

}

export default getRequestConfig(async ({ locale }) => {
	const requested = locale;
	const currentLocale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	const allMessages = await loadMessage(currentLocale);

	return {
		locale: currentLocale,
		messages: allMessages
	};
});
