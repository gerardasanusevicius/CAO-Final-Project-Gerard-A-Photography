import React from 'react';
import { Box, Container, Button } from '@mui/material';
import { useRootSelector } from '../../store/hooks';

const ReduxTestPage: React.FC = () => {
  const pictures = useRootSelector((state) => state.pictures);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
          pictures.map(({ id, ...picture }) => (
            <Box
              key={id}
              sx={{
                width: '300px',
                height: '300px',
                margin: '30px',
                position: 'relative',
              }}
            >
              <img
                src={picture.src}
                alt={picture.title}
                width="300px"
                height="300px"
              />
              <Button
                variant="text"
                sx={{
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                }}
              >
                X
              </Button>
            </Box>

          ))
        }
    </Container>
  );
};
export default ReduxTestPage;
