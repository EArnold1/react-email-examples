import {
  Hr,
  Img,
  Section,
  Text,
  Link,
  Row,
  Column,
  type ImgProps,
} from '@react-email/components';

interface SocialIcon extends ImgProps {
  link: string;
}

const getBaseURL = () => '';

const SOCIAL_ICONS: SocialIcon[] = [
  {
    alt: 'Linkedin',
    // src: 'https://res.cloudinary.com/duceqjs0b/image/upload/v1754571943/linkedin_2_e4dlln.svg',
    src: '/static/linkedin.png',
    width: 32,
    height: 32,
    link: '#',
    className: 'pr-[10px]',
  },
  {
    alt: 'X',
    // src: 'https://res.cloudinary.com/duceqjs0b/image/upload/v1754571943/twitter_rpbeju.svg',
    src: '/static/x.png',
    width: 32,
    height: 32,
    link: '#',
    className: 'pr-[10px]',
  },
  {
    alt: 'Facebook',
    // src: 'https://res.cloudinary.com/duceqjs0b/image/upload/v1754571943/facebook_i0zrza.svg',
    src: '/static/facebook.png',
    width: 32,
    height: 32,
    link: '#',
  },
];

const SOCIAL_LINKS = [
  { href: 'privacy', label: 'Privacy Policy' },
  { href: 'terms', label: 'Terms & Conditions' },
  {
    href: 'mailto:info@edulinksng.com',
    label: 'info@edulinksng.com',
    isEmail: true,
  },
];

const SocialLinks = () => (
  <td align="center">
    <Row className="table-cell w-full align-bottom" align="center">
      {SOCIAL_ICONS.map(({ alt, src, width, height, link, className }) => (
        <Column className={className} key={alt}>
          <Link href={link}>
            <Img alt={alt} src={src} width={width} height={height} />
          </Link>
        </Column>
      ))}
    </Row>
  </td>
);

const FooterLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseURL = getBaseURL();
  return (
    <td align="center" className={mobile ? 'md:hidden' : 'hidden md:block'}>
      {mobile ? (
        SOCIAL_LINKS.map(({ label, href, isEmail }) => (
          <Text key={label} className="my-1">
            <Link
              href={isEmail ? href : `${baseURL}/${href}`}
              className="text-black underline"
            >
              {label}
            </Link>
          </Text>
        ))
      ) : (
        <Row className="table-cell w-full align-bottom text-sm" align="center">
          {SOCIAL_LINKS.map(({ label, href, isEmail }, idx) => (
            <>
              <Column key={label}>
                <Link
                  href={isEmail ? href : `${baseURL}/${href}`}
                  className="text-black underline"
                >
                  {label}
                </Link>
              </Column>
              {idx < SOCIAL_LINKS.length - 1 && (
                <Column className="hidden px-[5px] md:block">&#9900;</Column>
              )}
            </>
          ))}
        </Row>
      )}
    </td>
  );
};

const FooterTable = () => (
  <table className="mx-auto w-full">
    <tr>
      <SocialLinks />
    </tr>
    <tr>
      <td align="center">
        <Text className="text-md mt-1 mb-2">
          &copy; 2023 Edulinks.ng. All rights reserved.
        </Text>
      </td>
    </tr>
    <tr>
      <FooterLinks />
    </tr>
    <tr>
      <FooterLinks mobile />
    </tr>
  </table>
);

export const Footer = () => (
  <Section className="mt-[20px] px-3 text-center">
    <Text className="font-md">
      <strong>Need Help?</strong> Reach us via WhatsApp at +2349034445390 or
      email support@edulinks.ng and you can also reach us on our social media
      handles.
    </Text>
    <Hr />
    <FooterTable />
  </Section>
);
