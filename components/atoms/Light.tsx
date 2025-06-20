export default function Light() {
	return (
		<div className="absolute z-[-1] top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none print:hidden">
			<div className="w-[108rem] flex-none flex justify-end">
				<picture>
					<source srcSet="/images/beams/light-gradient.avif" type="image/avif"/>
					<img
						src="/images/beams/light-gradient.png" alt=""
						className="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async"/>
				</picture>
				<picture>
					<source srcSet="/images/beams/dark-gradient.avif" type="image/avif"/>
					<img src="/images/beams/dark-gradient.png" alt=""
						 className="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async"/>
				</picture>
			</div>
		</div>
	);
}
