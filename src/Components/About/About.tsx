import { aboutImage, aboutParagraph, pictureContainer } from '../../styles';
import { Paragraph, Container } from '../../Components';
import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const About: any = () => {
  let placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  interface aboutProps {
    description: any;
    image: string;
  }

  const [about, setAbout] = useState<aboutProps>({
    description: [],
    image: '',
  });

  useEffect(() => {
    axios
      .get('https://obscure-river-81403.herokuapp.com/api/abouts/1?populate=*')
      .then((res: any) => {
        setAbout({
          description: res.data.data.attributes.description.split('\\'),
          image:
            res.data.data.attributes.images.data[0].attributes.formats.medium
              .url,
        });
      });
  }, []);

  return (
    <Container>
      <picture className={pictureContainer}>
        <img
          className={aboutImage}
          src={`https://obscure-river-81403.herokuapp.com${about.image}`}
          alt="Landscape picture"
        />
      </picture>
      <article className={aboutParagraph}>
        {about.description.map((p: any, i: number) => {
          return <Paragraph key={i}>{p}</Paragraph>;
        })}
      </article>
    </Container>
  );
};

export { About };
