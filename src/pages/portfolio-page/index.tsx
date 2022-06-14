import React, { useEffect } from 'react';
import {
  Box, CircularProgress,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import PortfolioContainer from './portfolio-container';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import {
  selectPortfolioPictures, selectPortfolioPicturesLoading,
} from '../../store/selectors';
import { portfolioFetchPicturesThunkAction } from '../../store/action-creators';
import { selectAuthAdmin } from '../../store/features/auth/auth-selectors';
import SmallPicture from './small-picture';
import SmallPictureExtra from './small-picture-extra';
import { smallPicSize } from '../../helpers/structure-constants';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const picturesLoading = useRootSelector(selectPortfolioPicturesLoading);
  const adminLoggedIn = useRootSelector(selectAuthAdmin);
  const dispatch = useRootDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(portfolioFetchPicturesThunkAction);
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

  if (!picturesLoading) {
    pageContent = (
      <PortfolioContainer>
        {
    pictures.map(({ id, ...picture }) => (
      <Box
        key={id}
        onClick={() => navigate(`/portfolio/${id}`)}
        sx={{
          width: smallPicSize,
          height: smallPicSize,
          position: 'relative',
          ':hover': {
            cursor: 'pointer',
            opacity: '0.9',
          },
        }}
      >
        <SmallPicture
          component="img"
          src={picture.srcSmall}
          alt={picture.title}
        />
        {
          adminLoggedIn
            ? <SmallPictureExtra id={id} /> : null
  }
      </Box>
    ))
}
      </PortfolioContainer>

    );
  }

  return pageContent;
};

export default PortfolioPage;
