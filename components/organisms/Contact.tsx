import SectionHeader from "../atoms/SectionHeader";

export default function Contact() {
	return (
		<div id='contact'  className="mb-14 py-14 container mx-auto px-4 flex flex-col justify-center items-center print:px-0 print:block print:mb-0 print:py-0">
			<SectionHeader
				className="space-y-3"
				head={'Contact'} title={'Get in Touch'}>

				<p className={'mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed print:mx-4'}>Have
					a question or want to work together? Just shoot me a dm <a
						className="text-blue-500 hover:underline" href={'https://t.me/socketsomeone'}
						target="_blank">with a direct question on
						telegram </a> and I&#39;ll respond whenever I can. I&#39;m always open to new
					opportunities.
				</p>

			</SectionHeader>
		</div>
	)
}
