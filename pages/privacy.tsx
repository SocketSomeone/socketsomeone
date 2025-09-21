import Page from '@/components/Page';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";

export default function PrivacyPolicyPage() {

	const t = useTranslations('privacy');
	console.log(t('title'));

	return (
		<Page title={t('title')}
			  description="Learn about our privacy practices and how we handle your personal information. Read our Privacy Policy for details on data collection, usage, and your rights."
			  className="py-10 xl-wide:container px-4! xl-wide:px-8! my-8 space-y-4"
		>
			<div className="text-sm mb-2">
				<Link href="/" className="text-blue-600 hover:underline flex items-center">
					<ChevronLeftIcon width={14} height={14}/>
					Back to Home
				</Link>
			</div>

			<div className="flex flex-col mb-4">
				<h1 className="text-3xl font-bold">Privacy Policy</h1>
				<small className="text-base text-muted-foreground">
					Effective date: June 10, 2025
				</small>
			</div>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">1. Introduction</h2>
				<p>
					This Privacy Policy applies to visitors of{' '}
					<span className="font-medium">socketsomeone.me</span> and{' '}
					<span className="font-medium">socketsomeone.dev</span>. We are
					committed to protecting your privacy and being transparent about how
					we use your data.
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">2. What We Collect</h2>
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

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">3. Why We Collect Data</h2>
				<p>
					Data is used to understand website usage, improve performance, and
					enhance your experience. We do not sell or share this information
					with third parties.
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">4. Cookies</h2>

				<h3 className="text-lg font-semibold">What are Cookies?</h3>
				<p>
					Our websites use cookies to enhance your experience. Cookies are small text files stored on your device
					that help us understand how you use our sites and improve functionality.

					For more information on how to manage cookies, please refer to the help section of your browser or visit
					<a href="https://www.allaboutcookies.org/" className="underline ml-1 text-blue-600 dark:text-blue-400"
					   target="_blank"
					   rel="noopener noreferrer">
						AllAboutCookies.org
					</a>.
				</p>

				<h3 className="text-lg font-semibold">Types of Cookies We Use</h3>
				<ul className="list-disc list-inside space-y-1">
					<li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core
						functionality such as page navigation and access to secure areas.
					</li>
					<li><strong>Analytics Cookies:</strong> We use services like Google Analytics and Yandex Metrica to collect
						anonymous data about how visitors interact with our websites. This helps us improve performance and user
						experience.
					</li>
					<li><strong>Performance Cookies:</strong> These cookies help us understand how our services are used by measuring
						the performance of different pages and features.
					</li>
					<li><strong>Security Cookies:</strong> Used to detect and mitigate potential security risks, such as unauthorized
						access or abuse.
					</li>
					<li><strong>Functionality Cookies:</strong> These cookies allow us to remember your preferences and provide
						enhanced, more personalized features.
					</li>
				</ul>

				<h3 className="text-lg font-semibold mt-6">Cookies Overview</h3>
				<p className="mb-4">
					Below is a list of cookies used on our websites, including their providers, purposes, and expiration periods.
				</p>

				<div className="overflow-x-auto">
					<table className="w-full text-base text-left text-gray-700 dark:text-gray-200 border-separate border-spacing-y-2">
						<thead
							className="hidden sm:table-header-group bg-gray-100 dark:bg-gray-800 text-xs uppercase text-gray-600 dark:text-gray-300">
						<tr>
							<th className="px-4 py-2">Cookie Name</th>
							<th className="px-4 py-2">Provider</th>
							<th className="px-4 py-2">Purpose</th>
							<th className="px-4 py-2">Expiration</th>
						</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
						{[
							{
								name: '_ga, _gid',
								provider: 'Google Analytics',
								purpose: 'User behavior analytics',
								expiration: '1–2 years'
							},
							{
								name: '_ym_uid, _ym_d',
								provider: 'Yandex Metrica',
								purpose: 'Visitor session tracking',
								expiration: '1 year'
							},
							{
								name: 'yandexuid, yabs-sid,  yuidssc',
								provider: 'Yandex Metrica',
								purpose: 'User identification and session tracking',
								expiration: '1 year'
							},
							{
								name: 'ymex',
								provider: 'Yandex Metrica',
								purpose: 'User session tracking',
								expiration: '1 year'
							},
							{
								name: '__cf_bm',
								provider: 'Cloudflare',
								purpose: 'Bot mitigation and security',
								expiration: '30 minutes'
							},
							{
								name: 'cf_clearance',
								provider: 'Cloudflare',
								purpose: 'CAPTCHA & access persistence',
								expiration: '30 days'
							},
						].map((cookie, i) => (
							<tr key={i}
								className="sm:table-row block mb-4 sm:mb-0 border rounded sm:border-none p-4 sm:p-0 shadow-sm sm:shadow-none">
								<td className="px-4 py-2 font-semibold sm:font-normal sm:table-cell block before:content-['Cookie:'] before:font-semibold before:mr-1 sm:before:hidden">{cookie.name}</td>
								<td className="px-4 py-2 sm:table-cell block before:content-['Provider:'] before:font-semibold before:mr-1 sm:before:hidden">{cookie.provider}</td>
								<td className="px-4 py-2 sm:table-cell block before:content-['Purpose:'] before:font-semibold before:mr-1 sm:before:hidden">{cookie.purpose}</td>
								<td className="px-4 py-2 sm:table-cell block before:content-['Expires:'] before:font-semibold before:mr-1 sm:before:hidden">{cookie.expiration}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>

				<h3 className="text-lg font-semibold">Managing Cookies</h3>
				<p>
					You can choose to disable or delete cookies through your browser settings. Please note that disabling cookies may
					affect the functionality of some parts of the site.
				</p>
			</section>


			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">5. Your Choices</h2>
				<p>
					You can disable cookies or use browser extensions to block tracking
					services. For details on managing privacy settings:
				</p>
				<ul className="list-disc list-inside space-y-1">
					<li><a href="https://tools.google.com/dlpage/gaoptout" className="underline text-blue-600 dark:text-blue-400">Google
						Analytics Opt-out</a></li>
					<li><a href="https://yandex.com/support/metrica/general/opt-out.html"
						   className="underline text-blue-600 dark:text-blue-400">Yandex Metrica Opt-out</a></li>
				</ul>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">6. Data Retention</h2>
				<p>
					We retain anonymized usage data collected via Google Analytics and Yandex Metrika
					for up to <span className="font-medium">24 months</span>. After this period, the data is automatically deleted.
				</p>
				<p>
					We do not store any personally identifiable information on our servers.
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">7. GDPR Compliance (EU Users)</h2>
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

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">8. Transborder Data Transfers</h2>
				<p>
					In the course of website operation and analytics, user data may be transferred to servers located outside your
					country,
					including the United States and other jurisdictions. These transfers are conducted via the following third-party
					services:
				</p>
				<ul className="list-disc list-inside space-y-1">
					<li><span className="font-medium">Google LLC (USA)</span> — for Google Analytics</li>
					<li><span className="font-medium">Cloudflare Inc. (USA)</span> — for content delivery and security</li>
					<li><span className="font-medium">Yandex LLC (Russia / EEA)</span> — for Yandex Metrika</li>
				</ul>
				<p>
					Transfers are based on user consent and are conducted solely for analytics, performance monitoring, and security
					purposes.
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">9. Contact Information</h2>
				<p>
					If you have any questions or concerns regarding this policy, feel
					free to contact us at{' '}
					<a href="mailto:socket.someone@gmail.com" className="underline text-blue-600 dark:text-blue-400">
						socket.someone@gmail.com
					</a>.
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">10. Data Controller</h2>
				<p>
					The data controller responsible for processing your personal information on{' '}
					<span className="font-medium">socketsomeone.me</span> and{' '}
					<span className="font-medium">socketsomeone.dev</span> is:
				</p>
				<p className="mt-2">
					Filippov Alexey Nikolaevich<br/>
					Email:{' '}
					<a href="mailto:socket.someone@gmail.com" className="underline text-blue-600 dark:text-blue-400">
						socket.someone@gmail.com
					</a>
				</p>
			</section>

			<section className="space-y-1 text-base">
				<h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
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
				including the use of cookies, third-party analytics (Google Analytics, Yandex Metrika),
				and infrastructure services such as Cloudflare. Continued usage implies consent to data collection
				and transborder data transfers as outlined in this policy.
			</p>

		</Page>
	);
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`../messages/${locale}.json`)).default
		}
	};
}
