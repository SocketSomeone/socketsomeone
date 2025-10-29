import SectionHeader from '../atoms/SectionHeader';

type Props = {
	name?: string,
	title: string,
	subtitleStart?: string,
	tg?: string,
	subtitleEnd?: string
}

export default function Contact({name, title, subtitleStart, tg, subtitleEnd}: Props) {
	return (
		<div id="contact"
			 className="mb-14 py-14 container mx-auto px-4 flex flex-col justify-center items-center print:px-0 print:block print:mb-0 print:py-0">
			<SectionHeader
				className="space-y-3"
				head={name} title={title}
			/>

			<p className={'mx-auto max-w-[600px] text-center mt-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed print:text-start! print:mx-4'}>
				{subtitleStart}
				<a className="text-blue-500 hover:underline"
				   href={'https://t.me/socketsomeone'} target="_blank">
					{tg}
				</a> {subtitleEnd}
			</p>
		</div>
	);
}
