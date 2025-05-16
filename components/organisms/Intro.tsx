import Avatar from '@/components/atoms/Avatar';
import Banner from '@/components/organisms/Banner';
import SocialLinksGroup from '@/components/molecules/SocialLinksGroup';
import BlurFade from '@/components/magicui/blur-fade';

export default function Intro() {
	const animationStep = 0.05;
	const animationDelay = 0.25;

	const calculateDelay = (step: number = 0) => animationDelay + step * animationStep;

	return (
		<div
			className="relative h-full flex flex-col text-center items-center justify-center w-full space-y-4 print:justify-start print:text-start print:items-start print:space-y-2 print:w-full print:px-0">

			<BlurFade delay={calculateDelay()} className={'print:blur-none! print:opacity-100! print:animate-none!'}>
				<Avatar/>
			</BlurFade>

			<BlurFade delay={calculateDelay(1)} className={'print:blur-none! print:opacity-100! print:animate-none! print:hidden'}>
				<Banner/>
			</BlurFade>


			<BlurFade delay={calculateDelay(2)} className={'print:blur-none! print:opacity-100! print:animate-none! lg:w-2/3'}>
				<h1
					className="ext-3xl text-center subpixel-antialiased sm:text-2xl md:text-4xl xl:text-6xl xl:leading-[70px] font-extrabold text-gray-900 dark:text-white print:hidden">Hello,
					I’m <span
						className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-300">SocketSomeone</span> your <span
						className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">Software Engineer</span>
				</h1>
				<div className="hidden print:flex flex-col mt-0 mb-0">
					<h1 className="subpixel-antialiased font-extrabold text-gray-900 dark:text-white flex-col text-3xl mb-0">
						Alexey Filippov

					</h1>

					<small className="text-muted-foreground text-sm font-medium">
						Russia, Saint-Petersburg
					</small>
				</div>
			</BlurFade>


			<BlurFade delay={calculateDelay(3)} className={'print:blur-none! print:opacity-100! print:animate-none!'}>
				<p
					className="text-base md:text-xl subpixel-antialiased font-medium text-gray-500 dark:text-gray-300 leading-relaxed print:hidden">You
					just
					found my profile! I&apos;m a
					kitten who loves coffee and bugs! <span
						className="whitespace-nowrap">( •̀ ω •́ )✧</span>
				</p>
				<p className="hidden print:block text-base md:text-xl subpixel-antialiased font-medium text-gray-500 dark:text-gray-300 leading-relaxed pb-1 mb-0">
					Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of
					experience. I have worked on open-source projects that are becoming increasingly popular. My primary development
					language is Node.js, and I frequently use TypeScript. Additionally, I use Go/Python/C# to solve supplementary tasks.
				</p>
			</BlurFade>

			<BlurFade delay={calculateDelay(4)} className={'print:blur-none! print:opacity-100! print:animate-none!'}>
				<SocialLinksGroup/>
			</BlurFade>
		</div>
	);
}
