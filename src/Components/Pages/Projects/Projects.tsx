import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Paragraph, Container } from '../..';
import {
  description,
  projectName,
  projectContainer,
  projects100,
  projectImage,
  leftSide,
  rightSide,
} from '../../../styles';
import { useContentful } from '../../../assets/Contenful/Contenful';

const Projects: any = () => {
  const { getProjectContent } = useContentful();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjectContent().then((res) => {
      let cleanUpProject = res?.map((item) => {
        return {
          name: item.fields.name,
          description: item.fields.description,
          image: 'https:' + item.fields.image.fields.file.url || null,
          skills: item.fields.skills,
          githubUrl: item.fields.githubUrl,
          projectUrl: item.fields.projectUrl,
        };
      });
      setProjects(cleanUpProject);
    });
  }, []);

  interface projectProps {
    any: any;
  }
  let placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div className={projects100}>
      {projects.map((data: any, i: any) => {
        return (
          <Container key={i} className={projectContainer}>
            {/* project name link to the project */}
            <h2 className={projectName}>
              <a href={data.projectUrl} target="blank_">
                {data.name}
              </a>
            </h2>
            <picture className={i % 2 === 0 ? leftSide : rightSide}>
              <img
                className={projectImage}
                src={data.image}
                alt="Landscape picture"
              />
            </picture>
            <Paragraph
              className={
                i % 2 === 0
                  ? clsx(description, rightSide)
                  : clsx(description, leftSide)
              }
            >
              {data.description}
            </Paragraph>
          </Container>
        );
      })}
    </div>
  );
};

export { Projects };
