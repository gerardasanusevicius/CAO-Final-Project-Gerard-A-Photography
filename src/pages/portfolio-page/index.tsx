import React from 'react';
import {
  Box, Typography, Button,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';

import PictureContainer from './picture-container';
import { useRootSelector } from '../../store/hooks';
import { selectPortfolioPictures } from '../../store/selectors';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const dispatch = useDispatch();

  const deletePicture = (id: string): void => {
    dispatch({
      type: 'DELETE_PICTURE',
      payload: { id },
    });
  };

  if (pictures) {
    return (
      <PictureContainer>
        {
          pictures.map(({ id, ...picture }) => (
            <Box
              key={id}
              component="img"
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
                onClick={() => deletePicture(id)}
              >
                <ClearIcon />
              </Button>
            </Box>
          ))
        }
      </PictureContainer>
    );
  }

  return (
    <Typography>Please wait..</Typography>
  );
};

export default PortfolioPage;
