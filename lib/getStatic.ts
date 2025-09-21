import { GetStaticPropsContext } from 'next';

interface StaticParams {
	locale: string;
}

export function createGetStaticPropsWithLocalization() {
	return async function getStaticProps({ params }: GetStaticPropsContext) {
		const { locale } = params ?? { locale: 'en' };

		return {
			props: {
				messages: (await import(`../messages/${locale}.json`)).default,
				locale,
			}
		};
	};
}

export function createGenerateStaticParamsWithLocalization() {
	return async function generateStaticParams() {
		return [{ locale: 'en' }, { locale: 'ru' }];
	};
}
