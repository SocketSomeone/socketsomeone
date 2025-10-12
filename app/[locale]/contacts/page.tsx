import Page from '@/components/Page';
import SocialLinks from '@/components/organisms/SocialLinks';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';
import { Metadata } from 'next';
import { createLocaleAlternates } from '@/utils/seo';

const PAGE_TITLE = 'Contacts';
const PAGE_DESCRIPTION = 'Get in touch with Alexey Filippov, a software engineer specializing in web development, open source, and community building.';

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	return {
		title: PAGE_TITLE,
		description: PAGE_DESCRIPTION,
		alternates: createLocaleAlternates(locale, 'contacts')
	};
}

export default function Contacts() {
	return (
		<Page className={cn('w-full xl-wide:container flex flex-col justify-center items-center px-4 py-10 grow space-y-6')}>
			<SectionHeader title={'Get in touch'}
						   description={'I\'m always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms below.'}
						   align={'center'}
			/>

			<SocialLinks type={'card'}/>
		</Page>
	);
}
