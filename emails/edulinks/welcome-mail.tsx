import { Button, Heading, Section, Text } from '@react-email/components';
import { EmailLayout } from '../../components/layout';
import { EmailSignature } from '../../components/email-signature';

type Props = {
  username: string;
  questionURL: string;
};

const ConfirmRegistrationEmail = ({ username, questionURL }: Props) => {
  return (
    <EmailLayout>
      <Heading className="my-[30px] p-0 text-2xl font-bold text-black">
        You did it — your Edulinks.ng account is officially live! 🚀
      </Heading>
      <Text className="text-base text-black">
        Hi <strong>{username}</strong>,
      </Text>
      <Text className="text-sm text-[#333333]">
        Welcome to the learning community where questions spark conversations,
        knowledge deepens, and every day&apos;s a chance to grow.
      </Text>
      <Text className="text-sm text-[#333333]">
        Here&apos;s what you can do next: <br /> 🌟 Ask your first question{' '}
        <br /> 👥 Join a group that matches your interests <br /> 📚 Explore
        topics that match your curiosity
      </Text>
      <Text className="text-sm text-[#333333]">
        Your learning adventure starts now — and we&apos;re thrilled to be part
        of it. Click the button below and step into your new learning space:
      </Text>
      <Section className="mt-[32px] mb-[32px] text-center">
        <Button
          className="rounded bg-[#9A2FB5] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
          href={questionURL}
        >
          Start Exploring Edulinks
        </Button>
      </Section>
      <EmailSignature>
        <Text className="italic my-0">
          You received this email because you signed up on Edulinks NG using
          this email address. If this wasn&apos;t you, please ignore this
          message.
        </Text>
        <Text className="my-0">
          Thank you for choosing Edulinks.ng. We&apos;re thrilled to be part of
          your academic journey!
        </Text>
      </EmailSignature>
    </EmailLayout>
  );
};

ConfirmRegistrationEmail.PreviewProps = {
  username: 'Diana',
  questionURL: 'https://google.com',
} as Props;

export default ConfirmRegistrationEmail;
