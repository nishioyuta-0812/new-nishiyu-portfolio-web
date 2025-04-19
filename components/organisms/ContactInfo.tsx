import { ContactInfoCard } from '@/components/molecules/ContactInfoCard';
import { AtSign, Mail, MessageSquare } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <ContactInfoCard icon={Mail} title="メール">
        <a
          href="mailto:yutanishi0812@gmail.com"
          className="text-muted-foreground hover:text-primary"
        >
          yutanishi@gmail.com
        </a>
      </ContactInfoCard>

      <ContactInfoCard icon={MessageSquare} title="対応時間">
        平日 10:00 - 18:00
        <br />
        土日祝日を除く
      </ContactInfoCard>

      <ContactInfoCard icon={AtSign} title="SNS">
        Twitter: @yutakun_27
      </ContactInfoCard>
    </div>
  );
};
