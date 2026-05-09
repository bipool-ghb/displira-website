import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Displira',
  description: 'Displira Privacy Policy. Learn how we collect, use, and protect your information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide when creating an account, including your name, email address, company name, and billing information. We also collect information you upload or create through the Service, such as signage content, media files, and configuration settings.`,
  },
  {
    title: '2. Device Information',
    content: `When you connect devices to the Displira platform (such as Fire TV Sticks, Android TV devices, or Amazon Signage Sticks), we collect device identifiers, device model and manufacturer, operating system version, app version, network information (IP address, Wi-Fi SSID, signal strength), and pairing status. This information is necessary to provide device management, content delivery, and troubleshooting capabilities.`,
  },
  {
    title: '3. Diagnostics & Monitoring',
    content: `Connected devices periodically send diagnostic data to the Displira platform, including device heartbeat status, playback status, content refresh timestamps, CPU and memory usage, storage status, network connectivity, error logs, and device uptime. This data helps us ensure reliable content delivery and enables administrators to monitor their signage network.`,
  },
  {
    title: '4. How We Use Information',
    content: `We use the information we collect to: provide, maintain, and improve the Service; deliver and manage signage content on your devices; monitor device health and content playback; send service-related communications; provide customer support; detect and prevent fraud or abuse; comply with legal obligations.`,
  },
  {
    title: '5. Cookies & Analytics',
    content: `Our website may use cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand how visitors interact with our website. You can control cookie preferences through your browser settings. We may use third-party analytics services to help us understand website usage patterns.`,
  },
  {
    title: '6. Uploaded Content & Media',
    content: `Content you upload to the Service (images, videos, text, media files) is stored securely and used solely for the purpose of delivering your signage content. We do not access, review, or use your uploaded content for any purpose other than providing the Service, unless required by law or to enforce our Terms of Service.`,
  },
  {
    title: '7. Third-Party Services',
    content: `We may use third-party service providers to help us operate and improve the Service. These may include cloud hosting providers, email delivery services, analytics tools, and payment processors. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information. When you embed third-party content (such as YouTube videos), those third parties may collect information according to their own privacy policies.`,
  },
  {
    title: '8. Security',
    content: `We implement industry-standard security measures to protect your information, including HTTPS encryption for data in transit, secure storage for credentials and tokens, and access controls for our systems. While we strive to protect your information, no method of transmission over the Internet or electronic storage is completely secure.`,
  },
  {
    title: '9. Data Retention',
    content: `We retain your account information and content for as long as your account is active or as needed to provide the Service. Device diagnostic data is retained for operational monitoring purposes. You may request deletion of your account and associated data by contacting support@displira.com.`,
  },
  {
    title: '10. User Rights',
    content: `You have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your account and data; export your content and data; opt out of non-essential communications. To exercise these rights, please contact us at support@displira.com.`,
  },
  {
    title: '11. Information We Do Not Sell',
    content: `Displira does not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website. Your continued use of the Service after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: '13. Contact Information',
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us at support@displira.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-dark text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-text-light text-lg">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-text mb-3">{section.title}</h2>
                <p className="text-text-secondary leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
