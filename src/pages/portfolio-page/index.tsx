import React, { useEffect } from 'react';
import {
  Box, Button, CircularProgress,
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';

import PictureContainer from './picture-container';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import {
  selectPortfolioPictures, selectPortfolioPicturesLoading,
} from '../../store/selectors';
import { createPortfolioDeletePictureAction, portfolioFetchPicturesAction } from '../../store/action-creators';
import { selectUser } from '../../store/features/auth/auth-selectors';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const itemsLoading = useRootSelector(selectPortfolioPicturesLoading);
  const adminLoggedIn = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(portfolioFetchPicturesAction);
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

  if (!itemsLoading && adminLoggedIn) {
    pageContent = (
      <PictureContainer>
        {
    pictures.map(({ id, ...picture }) => (
      <Box
        key={id}
        sx={{
          width: '300px',
          height: '300px',
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
          onClick={() => dispatch(createPortfolioDeletePictureAction(id))}
        >
          <ClearIcon />
        </Button>
      </Box>
    ))
  }
      </PictureContainer>

    );
  } else if (!itemsLoading) {
    pageContent = (
      <PictureContainer>
        {
    pictures.map(({ id, ...picture }) => (
      <Box
        key={id}
        sx={{
          width: '300px',
          height: '300px',
          position: 'relative',
        }}
      >
        <img
          src={picture.src}
          alt={picture.title}
          width="300px"
          height="300px"
        />
      </Box>
    ))
  }
      </PictureContainer>

    );
  }

  return pageContent;
};

export default PortfolioPage;
