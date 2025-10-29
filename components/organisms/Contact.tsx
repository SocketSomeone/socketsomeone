'use client';
import SectionHeader from '../atoms/SectionHeader';
import { useTranslations } from "next-intl";

export default function Contact() {
	const t = useTranslations('home.sections.contacts');

	return (
		<div id="contact"
			 className="mb-14 py-14 container mx-auto px-4 flex flex-col justify-center items-center print:px-0 print:block print:mb-0 print:py-0">
			<SectionHeader
				className="space-y-3"
				head={t('name')} title={t('title')}
			/>

			<p className={'mx-auto max-w-[600px] text-center mt-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed print:text-start! print:mx-4'}>
				{t('subtitleStart')}
				<a className="text-blue-500 hover:underline"
				   href={'https://t.me/socketsomeone'} target="_blank">
					{t('tg')}
				</a> {t('subtitleEnd')}
			</p>
		</div>
	);
}
