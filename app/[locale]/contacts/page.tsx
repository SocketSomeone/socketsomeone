import Page from '@/components/Page';
import SocialLinks from '@/components/organisms/SocialLinks';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';

export default function Contacts() {
	return (
		<Page
			title='Contacts'
			description="Get in touch with Alexey Filippov, a software engineer specializing in web development, open source, and community building."
			className={cn('w-full xl-wide:container flex flex-col justify-center items-center px-4 py-10 grow space-y-6')}
		>
			<SectionHeader title={'Get in touch'}
						   description={'I\'m always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms below.'}
						   align={'center'}
			/>

			<SocialLinks type={'card'}/>
		</Page>
	);
}
