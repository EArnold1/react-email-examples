import {
  Section,
  Row,
  Column,
  Text,
  Img,
  type ImgProps,
} from '@react-email/components';

const getBaseURL = () => {
  return 'http://localhost:3001/static';
};

interface CardProps extends ImgProps {
  title: string;
  description: string;
}

const HowToCard = ({ alt, title, src, description }: CardProps) => (
  <>
    <Img alt={alt} height="48" src={src} width="48" className="mx-auto" />
    <Text className="my-3 leading-[24px] font-semibold text-gray-900">
      {title}
    </Text>
    <Text className="my-3 text-gray-500">{description}</Text>
  </>
);

const cards = [
  {
    alt: 'question',
    src: 'question.png',
    title: 'Easily Ask Questions and Get Answers from Your Peers',
    description:
      'Post your questions and receive responses from fellow students.',
  },
  {
    alt: 'group',
    src: 'group.png',
    title: 'Join Groups to Collaborate and Share Knowledge',
    description:
      'Connect with like-minded individuals and engage in meaningful discussions.',
  },
  {
    alt: 'invite',
    src: 'invite.png',
    title: 'Invite Friends to Enhance Your Learning Journey',
    description:
      'Invite your friends to Edulinks.ng and grow your network together.',
  },
];

const MobileIllustration = () => {
  const baseURL = getBaseURL();
  return (
    <Section className="w-full px-3 md:hidden">
      {cards.map(({ src, ...card }) => (
        <Section
          key={card.alt}
          className="mx-auto my-3 w-5/6 rounded-md bg-white p-2"
        >
          <HowToCard {...card} src={`${baseURL}/${src}`} />
        </Section>
      ))}
    </Section>
  );
};

export const HowToSection = () => {
  const baseURL = getBaseURL();

  return (
    <Section className="rounded-md bg-[#F8EBFB] py-4">
      <Row className="mb-6 hidden md:block">
        <Column className="w-[45%] px-3 align-top">
          <Text className="m-0 font-semibold">
            Discover How to Engage, Learn, and Connect on Edulinks.ng
          </Text>
        </Column>
        <Column className="w-[55%] px-3">
          <Text className="m-0">
            Edulinks.ng empowers undergraduates to seek answers and share
            knowledge. By asking questions, joining groups, and inviting
            friends, users can enhance their learning experience.
          </Text>
        </Column>
      </Row>

      {/* for mobile screen size */}
      <Section className="mb-6 md:hidden">
        <Text className="m-0 px-3 font-semibold">
          Discover How to Engage, Learn, and Connect on Edulinks.ng
        </Text>
        <Text className="mt-1 mb-0 px-3">
          Edulinks.ng empowers undergraduates to seek answers and share
          knowledge. By asking questions, joining groups, and inviting friends,
          users can enhance their learning experience.
        </Text>
      </Section>

      {/* md screen size upwards */}
      <Row className="hidden w-full [border-spacing:12px] md:block">
        {cards.map(({ src, ...card }) => (
          <Column key={card.alt} className="w-[200px] rounded-md bg-white p-2">
            <HowToCard {...card} src={`${baseURL}/${src}`} />
          </Column>
        ))}
      </Row>

      <MobileIllustration />
    </Section>
  );
};
