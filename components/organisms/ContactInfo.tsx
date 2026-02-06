import { ContactInfoCard } from '@/components/molecules/ContactInfoCard';
import { AtSign, Mail, MessageSquare } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <ContactInfoCard icon={Mail} title="メール" code="CH-01">
        <a
          href="mailto:yutanishi0812@gmail.com"
          className="text-[#1e90ff]/60 hover:text-[#1e90ff] transition-colors duration-300"
        >
          yutanishi0812@gmail.com
        </a>
      </ContactInfoCard>

      <ContactInfoCard icon={MessageSquare} title="対応時間" code="CH-02">
        <span className="text-[#1e90ff]/50">
          平日 10:00 - 18:00
          <br />
          土日祝日を除く
        </span>
      </ContactInfoCard>

      <ContactInfoCard icon={AtSign} title="SNS" code="CH-03">
        <span className="text-[#1e90ff]/50">Twitter: @yutakun_27</span>
      </ContactInfoCard>
    </div>
  );
};
