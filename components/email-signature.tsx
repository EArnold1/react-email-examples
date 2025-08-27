import { Section, Text } from '@react-email/components';

type Props = {
  children?: React.ReactNode;
};

export const EmailSignature = ({ children }: Props) => {
  return (
    <Section className="flex gap-2">
      {children ? children : null}

      <Text className="mb-0 text-[#333333]">Best Regards,</Text>
      <Text className="my-0 text-[20px] leading-[24px] font-semibold">
        Edulinks.ng team.
      </Text>
    </Section>
  );
};
