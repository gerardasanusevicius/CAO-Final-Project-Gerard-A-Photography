import React from 'react';
import { Box, Container } from '@mui/material';
import { useRootSelector } from '../../store/hooks';

const ReduxTestPage: React.FC = () => {
  const pictures = useRootSelector((state) => state.pictures);

  return (
    <Container>
      {
          pictures.map(({ id, ...picture }) => (
            <Box
              key={id}
              component="img"
              sx={{
                width: '300px',
                height: '300px',
                margin: '30px',
              }}
              src={picture.src}
              alt={picture.title}
            />
          ))
        }
    </Container>
  );
};
export default ReduxTestPage;
