import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Paragraph, Container, Gap } from '../..';
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
  interface projectProp {
    name: string;
    description: string;
    image: string;
    skills: string;
    githubUrl: string;
    projectUrl: string;
  }

  const { getProjectContent } = useContentful();
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    getProjectContent().then((res) => {
      let cleanUpProject = res?.map((item: any) => {
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
