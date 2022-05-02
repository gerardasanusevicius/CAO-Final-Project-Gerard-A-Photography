import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import Picture from '../../types/pictures';

const initialPicture = {
  id: 'test',
  title: 'Test',
  src: 'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
};

const PortfolioPage: React.FC = () => {
  const [pictures, setPictures] = useState<Picture[]>([initialPicture]);

  useEffect(() => {
    axios.get<Picture[]>('http://localhost:8000/pictures')
      .then((res) => {
        setPictures(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (pictures) {
    return (
      <Container>
        {
          pictures.map((picture) => (
            <Box
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
  }

  return (
    <Typography>Please wait..</Typography>
  );
};

export default PortfolioPage;
