import { aboutImage, aboutParagraph, pictureContainer } from '../../../styles';
import { Paragraph, Container } from '../..';
import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { useContentful } from '../../../assets/Contenful/Contenful';

const About: any = () => {
  interface aboutProps {
    description: any;
    image: string;
  }

  const [about, setAbout] = useState<aboutProps>({
    description: [],
    image: '',
  });

  const { getAboutContent } = useContentful();
  useEffect(() => {
    getAboutContent().then((res) => {
      setAbout({
        description: [res?.items[0].fields.about],
        image: 'https:' + res?.items[0].fields.portrait.fields.file.url,
      });
    });
  }, []);

  return (
    <Container>
      <picture className={pictureContainer}>
        <img className={aboutImage} src={about.image} alt="Landscape picture" />
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
