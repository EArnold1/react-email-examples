import { Button, Column, Row, Section, Text } from '@react-email/components';
import { EmailLayout } from '../../components/layout';
import { EmailSignature } from '../../components/email-signature';
import { HowToSection } from '../../components/how-to';
import { EmailHeading } from '../../components/heading';

type Props = {
  verificationURL: string;
  verificationCode: string;
};

const Code = ({ verificationCode, verificationURL }: Props) => {
  return (
    <Section className="text-center">
      <Text className="text-[#333333]">
        Click the button below to verify your email and complete your
        Edulinks.ng account setup.
      </Text>
      <Button
        href={verificationURL}
        className="rounded-md bg-[#9A2FB5] px-8 py-3 text-sm text-white no-underline"
      >
        Verify & Get Started
      </Button>

      <Row className="mx-auto mb-0 flex w-[251px] gap-x-2">
        <Column>
          <Text className="mb-0">or use this verification code:</Text>
        </Column>
        <Column>
          <Text className="mb-0 ml-2 font-semibold">{verificationCode}</Text>
        </Column>
      </Row>
      <Row className="mx-auto">
        <Column align="center">
          <Text className="mt-0">
            This link and code will expire in 15 minutes.
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

const AccountSetupVerification = (props: Props) => {
  return (
    <EmailLayout>
      <EmailHeading title="Welcome to Edulinks.ng" />
      <Text className="mb-0 font-semibold">Hi There 👋 </Text>
      <Text className="mt-1">You are almost there,</Text>
      <Code {...props} />
      <HowToSection />
      <EmailSignature>
        <Text className="italic">
          You received this email because you used this email address to sign up
          on Edulinks.ng. If this wasn&apos;t you, please ignore this message.
        </Text>
        <Text>
          Thank you for choosing Edulink.ng. We look forward to seeing you ease
          your academic journey by collaborating with individuals of like minds.
        </Text>
      </EmailSignature>
    </EmailLayout>
  );
};

AccountSetupVerification.PreviewProps = {
  verificationCode: 'NX535LW',
  verificationURL: 'https://google.com',
} as Props;

export default AccountSetupVerification;
