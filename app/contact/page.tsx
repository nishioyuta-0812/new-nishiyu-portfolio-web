import { PageLayout } from '@/components/template/PageLayout';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfo } from '@/components/organisms/ContactInfo';

export default function Contact() {
  return (
    <PageLayout
      title="お問い合わせ"
      backgroundImage="/backgrounds/contact-bg-anime.jpeg"
      description="プロジェクトのご相談やお問い合わせは、下記フォームよりお気軽にご連絡ください。通常2営業日以内にご返信させていただきます。"
    >

      {/* Contact Information */}
      <section className="mb-24">
        <ContactInfo />
      </section>

      {/* Contact Form */}
      <section>
        <ContactForm />
      </section>
    </PageLayout>
  );
}
