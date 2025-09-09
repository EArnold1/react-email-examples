import { Button, Column, Row, Section, Text } from '@react-email/components';
import { EmailLayout } from '../../components/layout';
import { EmailSignature } from '../../components/email-signature';
import { EmailHeading } from '../../components/heading';

type Props = {
  name: string;
  newEmail: string;
  verificationCode: string;
  verificationURL: string;
};

export const Code = ({
  verificationCode,
  verificationURL,
}: Omit<Props, 'newEmail' | 'name'>) => {
  return (
    <Section className="text-center">
      <Button
        href={verificationURL}
        className="rounded-md bg-[#9A2FB5] px-8 py-3 text-sm text-white no-underline"
      >
        Update Email
      </Button>

      <Row className="mx-auto mb-0 flex w-[251px] gap-x-2">
        <Column>
          <Text className="mb-0">or use this verification code:</Text>
        </Column>
        <Column>
          <Text className="mb-0 ml-2 font-semibold">{verificationCode}</Text>
        </Column>
      </Row>
    </Section>
  );
};

const ChangeEmailVerification = ({ newEmail, name, ...rest }: Props) => {
  return (
    <EmailLayout>
      <EmailHeading title="Your Edulinks.ng Email Update" />
      <Text className="mb-0 font-semibold text-[#333333]">Hi {name},</Text>
      <Text className="mt-1 text-[#333333]">
        We received a request to change your Edulinks.ng email to{' '}
        <strong>{newEmail}</strong>. If this was you, just hit the button below
        or use the verification code provided below it.
      </Text>
      <Code {...rest} />
      <EmailSignature>
        <Text className="text-[#333333] italic">
          This verification link is only valid for 10 minutes and can be used
          once. Please, do not share it with anyone. If you did not initiate
          this request, kindly ignore this email.
        </Text>
        <Text>
          Thanks for being part of the Edulinks.ng community. We’re excited to
          keep learning and growing with you — one click at a time!
        </Text>
      </EmailSignature>
    </EmailLayout>
  );
};

ChangeEmailVerification.PreviewProps = {
  verificationCode: 'NX535LW',
  verificationURL: 'https://google.com',
  newEmail: 'johndoediana@email.com',
  name: 'Diana',
} as Props;

export default ChangeEmailVerification;
