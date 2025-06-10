import Page from '@/components/Page';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function PrivacyPolicyPage() {
	return (
		<Page title="Privacy Policy | SocketSomeone"
			  description="Learn about our privacy practices and how we handle your personal information. Read our Privacy Policy for details on data collection, usage, and your rights."
		>
			<div
				className="md:container my-8 py-8 px-4 md:px-0! space-y-4">
				<div className="text-sm mb-1">
					<Link href="/" className="text-blue-600 hover:underline flex items-center">
						<ChevronLeftIcon width={16} height={16}/>
						Back to Home
					</Link>
				</div>

				<div className="flex flex-col mb-4">
					<h1 className="text-2xl font-bold">Privacy Policy</h1>
					<small className="text-sm text-muted-foreground">
						Effective date: June 10, 2025
					</small>
				</div>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">1. Introduction</h2>
					<p>
						This Privacy Policy applies to visitors of{' '}
						<span className="font-medium">socketsomeone.me</span> and{' '}
						<span className="font-medium">socketsomeone.dev</span>. We are
						committed to protecting your privacy and being transparent about how
						we use your data.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">2. What We Collect</h2>
					<p>
						We collect anonymous usage data through:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<span className="font-medium">Cloudflare</span> — used for content delivery, DDoS protection, and performance
							optimization.
							This service may log your IP address and other technical data.
							See <a href="https://www.cloudflare.com/privacypolicy/" className="underline text-blue-600 dark:text-blue-400"
								   target="_blank" rel="noopener noreferrer">Cloudflare’s Privacy Policy</a>.
						</li>
						<li>
							<span className="font-medium">Google Analytics</span> — used to collect aggregated traffic and usage data.
							See <a href="https://policies.google.com/privacy" className="underline text-blue-600 dark:text-blue-400"
								   target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
						</li>
						<li>
							<span className="font-medium">Yandex Metrika</span> — used to understand how users interact with our websites.
							See <a href="https://yandex.com/legal/confidential/" className="underline text-blue-600 dark:text-blue-400"
								   target="_blank" rel="noopener noreferrer">Yandex Privacy Policy</a>.
						</li>
					</ul>
					<p>
						These services may collect information such as your IP address,
						browser type, pages visited, and time spent on our websites.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">3. Why We Collect Data</h2>
					<p>
						Data is used to understand website usage, improve performance, and
						enhance your experience. We do not sell or share this information
						with third parties.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">4. Your Choices</h2>
					<p>
						You can disable cookies or use browser extensions to block tracking
						services. For details on managing privacy settings:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li><a href="https://tools.google.com/dlpage/gaoptout" className="underline text-blue-600 dark:text-blue-400">Google
							Analytics Opt-out</a></li>
						<li><a href="https://yandex.com/support/metrica/general/opt-out.html"
							   className="underline text-blue-600 dark:text-blue-400">Yandex Metrica Opt-out</a></li>
						<li><a href="https://www.cloudflare.com/privacypolicy/" className="underline text-blue-600 dark:text-blue-400">Cloudflare
							Privacy Policy</a></li>
					</ul>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">5. GDPR Compliance (EU Users)</h2>
					<p>
						If you are located in the European Economic Area (EEA), we collect and process your data
						only after obtaining your explicit consent via our cookie banner. The data collected
						(e.g. IP address, device information, user behavior) is considered personal information
						under the GDPR and is handled accordingly.
					</p>
					<p>
						You have the right to access, correct, delete, or restrict the use of your data.
						You can revoke consent at any time.
					</p>
					<p>
						Data is processed by Google Analytics (USA) and Yandex Metrika (Russia), which may
						involve international data transfers.
					</p>
					<p>
						If you have GDPR-related concerns, please contact us at{' '}
						<a href="mailto:socket.someone@gmail.com" className="underline text-blue-600 dark:text-blue-400">
							socket.someone@gmail.com
						</a>.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">6. Data Retention</h2>
					<p>
						We retain anonymized usage data collected via Google Analytics and Yandex Metrika
						for up to <span className="font-medium">24 months</span>. After this period, the data is automatically deleted.
					</p>
					<p>
						We do not store any personally identifiable information on our servers.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">7. Contact Information</h2>
					<p>
						If you have any questions or concerns regarding this policy, feel
						free to contact us at{' '}
						<a href="mailto:socket.someone@gmail.com" className="underline text-blue-600 dark:text-blue-400">
							socket.someone@gmail.com
						</a>.
					</p>
				</section>

				<section className="space-y-2 text-sm">
					<h2 className="text-lg font-semibold">8. Changes to This Policy</h2>
					<p>
						We reserve the right to update or modify this Privacy Policy at any time.
						When changes are made, we will update the &#34;Effective Date&#34; at the top of the policy.
					</p>
					<p>
						Your continued use of our websites after the posting of changes will constitute your acceptance of such changes.
						We encourage you to review this page periodically to stay informed.
					</p>
				</section>

				<p className="text-sm text-muted-foreground mt-4">
					By continuing to use this website, you acknowledge that you have read and agree to our
					<Link href="/privacy" className="underline text-blue-600 dark:text-blue-400 ml-1">Privacy Policy</Link>,
					including the use of cookies and tracking technologies as described above.
				</p>
			</div>

		</Page>
	);
}
