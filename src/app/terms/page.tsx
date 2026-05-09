import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Displira',
  description: 'Displira Terms of Service. Read the terms governing use of the Displira digital signage platform.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Displira platform, website, applications, or any associated services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service. These Terms apply to all users, including administrators, content creators, and viewers.`,
  },
  {
    title: '2. Use of Services',
    content: `Displira provides a cloud-based digital signage platform that allows you to create, manage, publish, and display content across connected screens and devices. The Service includes the admin portal, content management tools, device pairing, content publishing, scheduling, and player applications for Fire TV, Android TV, and other supported devices.`,
  },
  {
    title: '3. Account Responsibilities',
    content: `You are responsible for maintaining the security of your account credentials. You must not share your login information with unauthorized parties. You are responsible for all activity that occurs under your account. You must notify Displira immediately if you become aware of any unauthorized use of your account.`,
  },
  {
    title: '4. User Content',
    content: `You retain ownership of all content you upload, create, or publish through the Service ("User Content"). By using the Service, you grant Displira a limited license to store, process, transmit, and display your User Content solely for the purpose of providing the Service to you. Displira does not claim ownership of your User Content.`,
  },
  {
    title: '5. Uploaded Media & Streaming Content',
    content: `You are solely responsible for ensuring that you have the necessary rights, licenses, and permissions to upload, stream, embed, or publicly display any media content through the Service. This includes but is not limited to images, videos, YouTube embeds, streaming URLs, music, and any other media. You must comply with all applicable copyright laws, licensing agreements, and platform terms of service (such as YouTube's Terms of Service) when using third-party content. Displira is not responsible for any copyright or licensing violations arising from your use of third-party content.`,
  },
  {
    title: '6. Device & Screen Management',
    content: `Displira may remotely publish, update, and manage signage content on connected devices as part of normal Service operation. This includes pushing content updates, schedule changes, and configuration changes to paired devices. Displira may collect device information including device identifiers, network status, playback status, and diagnostic data for operational purposes.`,
  },
  {
    title: '7. Acceptable Use',
    content: `You agree not to use the Service to: display content that is illegal, harmful, threatening, abusive, or otherwise objectionable; infringe upon the intellectual property rights of others; transmit malware, viruses, or harmful code; attempt to gain unauthorized access to the Service or its related systems; use the Service in any manner that could damage, disable, or impair the Service; resell or redistribute the Service without written permission.`,
  },
  {
    title: '8. Billing & Subscription',
    content: `Certain features of the Service may require a paid subscription. Pricing, billing cycles, and payment terms are described on our pricing page and in your subscription agreement. Displira reserves the right to modify pricing with reasonable notice. You are responsible for all charges incurred under your account.`,
  },
  {
    title: '9. Service Availability',
    content: `Displira strives to maintain high availability of the Service, but does not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. Displira is not liable for any loss or damage resulting from Service downtime or interruptions.`,
  },
  {
    title: '10. Limitation of Liability',
    content: `To the maximum extent permitted by law, Displira shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising from your use of or inability to use the Service. Displira's total liability shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.`,
  },
  {
    title: '11. Termination',
    content: `Either party may terminate the use of the Service at any time. Displira reserves the right to suspend or terminate your account if you violate these Terms or engage in activity that harms the Service or other users. Upon termination, your right to use the Service ceases immediately. You may request deletion of your data by contacting support.`,
  },
  {
    title: '12. Intellectual Property',
    content: `The Service, including its software, design, logos, and documentation, is the intellectual property of Displira and is protected by applicable copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without written permission.`,
  },
  {
    title: '13. Changes to Terms',
    content: `Displira may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Service after changes are posted constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: '14. Contact Information',
    content: `If you have questions about these Terms of Service, please contact us at support@displira.com.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-dark text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
