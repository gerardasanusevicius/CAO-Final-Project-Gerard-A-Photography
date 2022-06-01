import React, { useEffect } from 'react';
import {
  Box, Button, CircularProgress,
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PictureContainer from './picture-container';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import {
  selectPortfolioPictures, selectPortfolioPicturesLoading,
} from '../../store/selectors';
import { createPortfolioDeletePictureThunkAction, portfolioFetchPicturesThunkAction } from '../../store/action-creators';
import { selectUser } from '../../store/features/auth/auth-selectors';
import PictureBox from './picture-box';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const itemsLoading = useRootSelector(selectPortfolioPicturesLoading);
  const adminLoggedIn = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

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

  // const extraProps = (
  //   <>
  //     <Button
  //       variant="text"
  //       sx={{
  //         position: 'absolute',
  //         top: '0px',
  //         right: '0px',
  //       }}
  //       onClick={() => dispatch(createPortfolioDeletePictureThunkAction(id))}
  //     >
  //       <ClearIcon />
  //     </Button>
  // <Button
  //   variant="text"
  //   sx={{
  //     position: 'absolute',
  //     top: '125px',
  //     left: '0px',
  //   }}
  //   onClick={() => alert('feature coming soon')}
  // >
  //   <ArrowBackIosNewIcon />
  // </Button>
  // <Button
  //   variant="text"
  //   sx={{
  //     position: 'absolute',
  //     top: '125px',
  //     right: '0px',
  //   }}
  //   onClick={() => alert('feature coming soon')}
  // >
  //   <ArrowForwardIosIcon />
  // </Button>
  //   </>
  // );

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
          onClick={() => dispatch(createPortfolioDeletePictureThunkAction(id))}
        >
          <ClearIcon />
        </Button>
        <Button
          variant="text"
          sx={{
            position: 'absolute',
            top: '125px',
            left: '0px',
          }}
          onClick={() => alert('feature coming soon')}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          variant="text"
          sx={{
            position: 'absolute',
            top: '125px',
            right: '0px',
          }}
          onClick={() => alert('feature coming soon')}
        >
          <ArrowForwardIosIcon />
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
      <PictureBox id={id} title={picture.title} src={picture.src} />
    ))
  }
      </PictureContainer>

    );
  }

  return pageContent;
};

export default PortfolioPage;
