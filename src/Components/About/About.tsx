import { placeHolderImage, aboutImage, aboutParagraph } from '../../styles';
import { Paragraph, Container } from '../../Components';
import clsx from 'clsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

const About: any = () => {
  let placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/about-sections?populate=*')
      .then((res) => {
        console.log(
          res.data.data[0].attributes.image.data.attributes.formats.large.name
        );
        setData(
          res.data.data[0].attributes.image.data.attributes.formats.large.url
        );
        console.log({ data });
      });
  }, []);

  return (
    <Container>
      <section className={clsx(placeHolderImage, aboutImage)}></section>
      <article className={aboutParagraph}>
        <Paragraph>{placeholder}</Paragraph>
        <Paragraph>{placeholder}</Paragraph>
        <img src={`${data}`} alt="" />
      </article>
    </Container>
  );
};

export { About };
