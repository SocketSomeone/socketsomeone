import Image from 'next/image';

const LIGHT_IMAGE = {
	src: '/images/beams/light-gradient.png',
	width: 2296,
	height: 668
} as const;

const DARK_IMAGE = {
	src: '/images/beams/dark-gradient.png',
	width: 2880,
	height: 1232
} as const;

export default function Light() {
	return (
		<div className="absolute z-[-1] top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none print:hidden">
			<div className="w-[108rem] flex-none flex justify-end" aria-hidden>
				<Image
					src={LIGHT_IMAGE.src}
					alt=""
					width={LIGHT_IMAGE.width}
					height={LIGHT_IMAGE.height}
					priority
					fetchPriority="high"
					sizes="(min-width: 1280px) 60vw, 100vw"
					className="w-[71.75rem] flex-none max-w-none dark:hidden"
				/>
				<Image
					src={DARK_IMAGE.src}
					alt=""
					width={DARK_IMAGE.width}
					height={DARK_IMAGE.height}
					sizes="(min-width: 1280px) 80vw, 110vw"
					className="w-[90rem] flex-none max-w-none hidden dark:block"
				/>
			</div>
		</div>
	);
}
