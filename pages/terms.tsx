import Page from '@/components/Page';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function TermsPage() {
	return (
		<Page
			title="Terms of Service"
			description="Terms of Service for socketsomeone.me and socketsomeone.dev"
		>
			<div className="md:container my-8 py-8 px-4 md:px-0! space-y-4 text-sm">
				<div className="text-sm mb-1">
					<Link href="/" className="text-blue-600 hover:underline flex items-center">
						<ChevronLeftIcon width={16} height={16} />
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

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">1. Purpose</h2>
					<p>
						These Sites serve as personal portfolio websites to showcase the work, skills, and background of their owner. All
						content is provided for informational and non-commercial purposes.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">2. Analytics</h2>
					<p>
						We use Google Analytics and Yandex Metrika to collect anonymous usage data to improve our Sites. By continuing to
						use
						the Sites, you consent to this data collection. For more information, see our <Link href="/privacy"
																											className="underline! text-blue-600">Privacy
						Policy</Link>.
					</p>
				</section>

				<section className="space-y-2">

					<h2 className="text-lg font-semibold">3. Intellectual Property</h2>
					<p>
						All content, including text, graphics, and design, is owned by the site owner unless otherwise stated. Unauthorized
						copying, reproduction, or distribution is not allowed.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">4. Disclaimer</h2>
					<p>
						All content is provided “as is” without warranties of any kind. The site owner is not responsible for any damages or
						losses resulting from the use of the Sites.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">5. Contact</h2>
					<p>
						For any questions regarding these Terms, please contact: <a href="mailto:socket.someone@gmail.com"
																					className="underline text-blue-600">socket.someone@gmail.com</a>
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">6. Changes</h2>
					<p>
						These Terms of Service may be updated from time to time without prior notice. Changes will be effective immediately
						upon
						posting. It is your responsibility to review the Terms periodically for updates.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">7. Governing Law</h2>
					<p>
						These Terms of Service shall be governed by and construed in accordance with the laws of the Russian Federation. Any
						disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the
						courts of
						the Russian Federation.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">8. External Links and Third-Party Services</h2>
					<p>
						The Sites may contain links to external websites or embed content and features from third-party services. These are
						provided for convenience and informational purposes only. We do not control or endorse any external content and are
						not responsible for its accuracy, availability, or privacy practices. You access such links and services at your own
						risk.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">9. Accuracy of Materials</h2>
					<p>
						The materials appearing on the Sites are provided for general information only. While efforts are made to ensure
						accuracy, completeness, and timeliness, we make no warranties or representations regarding the reliability or
						accuracy of any information. The content may include technical, typographical, or photographic errors and is subject
						to change without notice.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">10. Limitation of Liability</h2>
					<p>
						In no event shall the site owner be liable for any direct, indirect, incidental, special, or consequential damages
						arising out of or in connection with the use of the Sites or any content provided herein.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">11. Severability</h2>
					<p>
						If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in
						full force and effect.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold">12. Entire Agreement</h2>
					<p>
						These Terms of Service constitute the entire agreement between you and the site owner regarding the use of the
						Sites and supersede any prior agreements or understandings.
					</p>
				</section>

				<p className="mt-4 text-xs text-gray-500">
					Continued use of the Sites will be considered as acceptance of these Terms.
				</p>
			</div>
		</Page>
	);
}
