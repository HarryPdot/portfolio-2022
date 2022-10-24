import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'hnyp3aiv2g1d',
    accessToken: 'Juy1tfw4ydnGMVy2gsBgX5sTcl17BtJlTaglA_sH-QY',
    host: 'cdn.contentful.com',
  });

  const getAboutContent = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'portfolio',
        select: 'fields',
      });
      return entries;
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(error);
    }
  };

  const getProjectContent = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'projectSection',
        select: 'fields',
      });
      return entries.items;
    } catch (error) {
      console.log('error fetching project data', error);
    }
  };

  return { getAboutContent, getProjectContent };
};

export { useContentful };
