import React, { useEffect } from 'react';
import { Box, CircularProgress, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';
import InfoContainer from '../../components/info-container';
import ExternalLink from './external-link';
import { selectProjects, selectProjectsLoading } from '../../store/selectors';
import { fetchProjectsThunkAction } from '../../store/action-creators';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectAuthAdmin } from '../../store/features/auth/auth-selectors';
import ProjectExtra from './project-extra';

const AboutPage: React.FC = () => {
  const projects = useRootSelector(selectProjects);
  const projectsLoading = useRootSelector(selectProjectsLoading);
  const adminLoggedIn = useRootSelector(selectAuthAdmin);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(fetchProjectsThunkAction);
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

  if (!projectsLoading) {
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
              <Box key={id}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <ExternalLink>{project.title}</ExternalLink>
                </a>
                {
          adminLoggedIn
            ? <ProjectExtra id={id} /> : null
                }
              </Box>
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
