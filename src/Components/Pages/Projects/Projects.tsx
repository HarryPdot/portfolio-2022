import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Paragraph, Container } from '../..';
import {
  description,
  projectName,
  projectContainer,
  projects100,
} from '../../../styles';

const Projects: any = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProject(url: any) {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    }
    fetchProject('https://obscure-river-81403.herokuapp.com/api/projects').then(
      (res) => {
        console.log(res.data);
        setProjects(res.data);
        console.log(projects);
      }
    );
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
              <a href={data.attributes['github_url']} target="blank_">
                {data.attributes['Name']}
              </a>
            </h2>
            <Paragraph className={description}>
              {data.attributes.description}
            </Paragraph>
          </Container>
        );
      })}
    </div>
  );
};

export { Projects };
