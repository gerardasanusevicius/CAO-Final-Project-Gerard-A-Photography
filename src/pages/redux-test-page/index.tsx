import React from 'react';
import { Box, Container, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { useRootSelector } from '../../store/hooks';
import { selectReduxTestPictures } from '../../store/selectors';

const ReduxTestPage: React.FC = () => {
  const pictures = useRootSelector(selectReduxTestPictures);
  const dispatch = useDispatch();

  const deletePicture = (id: string): void => {
    dispatch({
      type: 'DELETE_PICTURE',
      payload: { id },
    });
  };

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
                onClick={() => deletePicture(id)}
              >
                <ClearIcon />
              </Button>
            </Box>

          ))
        }
    </Container>
  );
};
export default ReduxTestPage;
