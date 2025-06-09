import Page from '@/components/Page';

export default function PrivacyPolicyPage() {
	return (
		<Page title="Privacy Policy | SocketSomeone"
			  description="Learn about our privacy practices and how we handle your personal information. Read our Privacy Policy for details on data collection, usage, and your rights.">
			<div className="md:container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="text-lg mb-2">Last updated: October 1, 2023</p>
				<p className="text-base mb-4">
					This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a
					purchase
					from our website.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
				<p className="text-base mb-4">
					We collect information about you when you visit our site, make a purchase, or interact with us in other ways. This may
					include your name, email address, shipping address, payment information, and any other details you provide.
				</p>
				<h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
				<p className="text-base mb-4">
					We use the information we collect to process your orders, communicate with you, improve our services, and comply with
					legal
					obligations.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
				<p className="text-base mb-4">
					We may share your personal information with third parties to help us operate our business and provide services to you.
					This
					includes service providers who assist with payment processing, shipping, and marketing.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
				<p className="text-base mb-4">
					You have the right to access, correct, or delete your personal information. You can also object to or restrict certain
					processing of your data.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
				<p className="text-base mb-4">
					We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this
					page.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
				<p className="text-base mb-4">
					If you have any questions about this Privacy Policy, please contact us at <a href="mailto:socket.someone@gmail.com"
																								 className="text-blue-500! hover:underline!">
					socket.someone@gmail.com
				</a>
				</p>
			</div>

		</Page>
	);
}
