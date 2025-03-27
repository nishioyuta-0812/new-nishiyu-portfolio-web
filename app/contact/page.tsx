import { PageLayout } from '@/components/templates/PageLayout';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfo } from '@/components/organisms/ContactInfo';

export default function Contact() {
  return (
    <PageLayout
      title="お問い合わせ"
      backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940"
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