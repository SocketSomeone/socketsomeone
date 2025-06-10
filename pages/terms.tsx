import Page from '@/components/Page';
import Link from 'next/link';

export default function TermsPage() {
	return (
		<Page
			title="Terms of Service"
			description="Terms of Service for socketsomeone.me and socketsomeone.dev"
		>
			<div className="md:container my-8 py-8 px-4 md:px-0! space-y-4 text-sm">
				<div className='text-sm mb-1'>
					<Link href="/" className="text-blue-600 hover:underline">
						Back to Home
					</Link>
				</div>

				<div className="flex flex-col mb-4">
					<h1 className="text-2xl font-bold">Terms of Service</h1>
					<small className="text-sm text-muted-foreground">
						Effective date: June 10, 2025
					</small>
				</div>


				<p>
					Welcome to <strong>socketsomeone.me</strong> and <strong>socketsomeone.dev</strong> (the “Sites”). By accessing or using
					the Sites, you agree to these Terms of Service. If you do not agree, please do not use the Sites.
				</p>

				<h2 className="text-lg font-semibold mt-6 mb-2">1. Purpose</h2>
				<p>
					These Sites serve as personal portfolio websites to showcase the work, skills, and background of their owner. All
					content is provided for informational and non-commercial purposes.
				</p>

				<h2 className="text-lg font-semibold mt-6 mb-2">2. Analytics</h2>
				<p>
					We use Google Analytics and Yandex Metrika to collect anonymous usage data to improve our Sites. By continuing to use
					the Sites, you consent to this data collection. For more information, see our <Link href="/privacy"
																									 className="underline! text-blue-600">Privacy
					Policy</Link>.
				</p>

				<h2 className="text-lg font-semibold mt-6 mb-2">3. Intellectual Property</h2>
				<p>
					All content, including text, graphics, and design, is owned by the site owner unless otherwise stated. Unauthorized
					copying, reproduction, or distribution is not allowed.
				</p>

				<h2 className="text-lg font-semibold mt-6 mb-2">4. Disclaimer</h2>
				<p>
					All content is provided “as is” without warranties of any kind. The site owner is not responsible for any damages or
					losses resulting from the use of the Sites.
				</p>

				<h2 className="text-lg font-semibold mt-6 mb-2">5. Contact</h2>
				<p>
					For any questions regarding these Terms, please contact: <a href="mailto:socket.someone@gmail.com"
																				className="underline text-blue-600">socket.someone@gmail.com</a>
				</p>

				<p className="mt-8 text-xs text-gray-500">
					Continued use of the Sites will be considered as acceptance of these Terms.
				</p>
			</div>
		</Page>
	);
}
