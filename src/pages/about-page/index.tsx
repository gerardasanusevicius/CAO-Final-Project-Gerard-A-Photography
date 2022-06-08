import React, { useEffect } from 'react';
import { Box, CircularProgress, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';
import InfoContainer from '../../components/info-container';
import ExternalLink from './external-link';
import { selectAboutProjects, selectAboutProjectsLoading } from '../../store/selectors';
import { aboutFetchProjectsThunkAction } from '../../store/features/about/about-action-creators';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectUser } from '../../store/features/auth/auth-selectors';

const AboutPage: React.FC = () => {
  const projects = useRootSelector(selectAboutProjects);
  const projectsLoading = useRootSelector(selectAboutProjectsLoading);
  const adminLoggedIn = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(aboutFetchProjectsThunkAction);
  }, []);

  let pageContent = (
    <Box>
      <CircularProgress
        sx={{
          color: 'primary.dark', ml: '45%', mt: '10%',
        }}
        size={60}
      />
    </Box>
  );

  if (projects && !projectsLoading) {
    pageContent = (
      <InfoContainer>
        <Box sx={{
          width: { xxs: '100%', lg: '36.25rem' },
          m: { xxs: '0 auto', md: 0 },
        }}
        >
          <Divider sx={{
            marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
          }}
          />
          <Paragraph>
            I am Gerardas Anusevicius - a photographer from Vilnius, Lithuania.
          </Paragraph>
          <Divider sx={{
            marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
          }}
          />
          <Paragraph>
            I create art in the form of:
            <br />
            fashion,
            <br />
            boudoir,
            <br />
            fine art,
            <br />
            backstage photography.
          </Paragraph>
          <Divider sx={{
            marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
          }}
          />
          <Paragraph>
            As a director I organised, photographed and wrote articles for:
          </Paragraph>
          <Box>
            {
            projects.map(({ id, ...project }) => (
              <a key={id} href={project.url} target="_blank" rel="noreferrer">
                <ExternalLink>{project.title}</ExternalLink>
              </a>
            ))
          }
          </Box>
          <Divider sx={{
            marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
          }}
          />
        </Box>
        <Box
          component="img"
          src={AboutPicture}
          alt="gerard_about_pic"
          sx={{
            maxWidth: { xxs: '100%', lg: '36%' },
            m: { xxs: '0 auto', md: 0 },
          }}
        />
      </InfoContainer>
    );
  }

  return pageContent;
};

export default AboutPage;
