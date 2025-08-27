import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  pixelBasedPreset,
} from '@react-email/components';
import { Footer } from './footer';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText?: string;
}

const ContentBody = ({ children }: Omit<EmailLayoutProps, 'previewText'>) => {
  return (
    <Section className="bg-[#F8EBFB] px-3">
      <Section className="mt-[32px]">
        <Img
          src="https://res.cloudinary.com/duceqjs0b/image/upload/v1754647158/Frame_11_qxruk7.png"
          // src="/static/logo.png"
          width="230"
          height="55"
          alt="Edulinks Logo"
          className="mx-auto my-0"
        />
      </Section>
      <Container className="my-[40px] max-w-[700px] rounded-xl border border-solid border-[#eaeaea] bg-white p-[24px] md:p-[32px]">
        <Section className="px-3">{children}</Section>
        <Footer />
      </Container>
    </Section>
  );
};

export const EmailLayout = ({ children, previewText }: EmailLayoutProps) => {
  return (
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            fontFamily: {
              'noto-thai': ['Noto Sans Thai', 'sans-serif'],
            },
          },
        },
      }}
    >
      <Html lang="en" dir="ltr">
        <Head />
        {previewText && <Preview>{previewText}</Preview>}
        <Body className="font-noto-thai mx-auto my-auto bg-gray-50">
          <ContentBody>{children}</ContentBody>
        </Body>
      </Html>
    </Tailwind>
  );
};
