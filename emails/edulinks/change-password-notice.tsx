import { Text } from '@react-email/components';
import { EmailLayout } from '../../components/layout';
import { EmailSignature } from '../../components/email-signature';
import { EmailHeading } from '../../components/heading';

type Props = {
  name: string;
};

const ChangePasswordNotice = ({ name }: Props) => {
  return (
    <EmailLayout previewText="Your Edulinks.ng password has been updated. Contact support immediately if this wasn't you.">
      <EmailHeading title="Your Password Has Been Successfully Updated" />
      <Text className="mb-0 font-semibold text-[#333333]">Hi {name},</Text>
      <Text className="mt-1 text-[#333333]">
        We received a request to change your Edulinks.ng password. If you did
        not make this request, please update your email or contact our customer
        support team immediately for further assistance.
      </Text>
      <EmailSignature>
        <Text>
          Thanks for being part of the Edulinks.ng community. We&apos;re excited
          to keep learning and growing with you — one click at a time!
        </Text>
      </EmailSignature>
    </EmailLayout>
  );
};

ChangePasswordNotice.PreviewProps = {
  name: 'Diana',
} as Props;

export default ChangePasswordNotice;
