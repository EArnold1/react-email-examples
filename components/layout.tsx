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

// using padding 8px for sm and padding 16px for md upwards

const ContentBody = ({ children }: Omit<EmailLayoutProps, 'previewText'>) => {
  return (
    <Section className="bg-[#F8EBFB] p-4">
      <Section className="my-4">
        <Img
          // src="https://res.cloudinary.com/duceqjs0b/image/upload/v1754647158/Frame_11_qxruk7.png"
          src="/static/logo.png"
          width="230"
          height="55"
          alt="Edulinks Logo"
          className="mx-auto my-0"
        />
      </Section>
      <Container className="max-w-[700px] rounded-xl border border-solid border-[#eaeaea] bg-white p-2 md:p-4">
        <Section className="p-2 md:p-4">{children}</Section>
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
