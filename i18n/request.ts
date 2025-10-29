import { getRequestConfig } from 'next-intl/server';
import {deepmerge} from "deepmerge-ts";

type Messages = Record<string, any>

const messagesFile = [
	'common',
	'home',
	'experience'
];

async function loadMessage(locale: string): Promise<Messages> {
	const imports = messagesFile.map(file =>
		import(`../messages/${locale}/${file}.json`));

	const messagesArray = await Promise.all(imports);

	const messagesObjects = messagesArray.map(m => m.default);

	return deepmerge(...messagesObjects) as Messages;

}

export default getRequestConfig(async ({ locale }) => {
	const currentLocale = locale ?? 'en';

	const allMessages = await loadMessage(currentLocale);

	return {
		locale: currentLocale,
		messages: allMessages
	};
});
