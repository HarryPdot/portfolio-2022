import clsx from 'clsx';
import { placeHolderImage } from '../../styles';
import { Paragraph, Container } from '../../Components';

const Projects: any = () => {
  let placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
    <Container>
      <div>
        {/* project name link to the project */}
        <h2>Project Name</h2>
        <div className={clsx(placeHolderImage)}></div>
        <Paragraph>{placeholder}</Paragraph>
      </div>
    </Container>
  );
};

export { Projects };
