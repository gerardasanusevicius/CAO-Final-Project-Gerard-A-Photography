import React, { useEffect } from 'react';
import {
  Box, CircularProgress,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import PictureContainer from './picture-container';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import {
  selectPortfolioPictures, selectPortfolioPicturesLoading,
} from '../../store/selectors';
import { portfolioFetchPicturesThunkAction } from '../../store/action-creators';
import { selectUser } from '../../store/features/auth/auth-selectors';
import PictureBox from './picture-box';
import PictureBoxExtra from './picture-box-extra';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const itemsLoading = useRootSelector(selectPortfolioPicturesLoading);
  const adminLoggedIn = useRootSelector(selectUser);
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

  if (!itemsLoading) {
    pageContent = (
      <PictureContainer>
        {
    pictures.map(({ id, ...picture }) => (
      <PictureBox key={id} onClick={() => navigate(`/portfolio/${id}`)}>
        <img
          src={picture.srcSmall}
          alt={picture.title}
          width="300px"
          height="300px"
        />
        {
          adminLoggedIn
            ? <PictureBoxExtra id={id} /> : null
  }
      </PictureBox>
    ))
}
      </PictureContainer>

    );
  }

  return pageContent;
};

export default PortfolioPage;
