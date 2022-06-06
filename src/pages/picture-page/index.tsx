import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import PictureContainer from '../../components/picture-container/picture-container';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectPortfolioPictures, selectPortfolioPicturesLoading } from '../../store/selectors';
import { portfolioFetchPicturesThunkAction } from '../../store/action-creators';
import LargePicture from './large-picture';

const PicturePage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const pictureLoading = useRootSelector(selectPortfolioPicturesLoading);
  const dispatch = useRootDispatch();
  const { id } = useParams();
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

  const test = pictures.some((picture) => picture.id === id);

  if (!pictureLoading && test) {
    const fetchedPicture = pictures.find((picture) => picture.id === id);
    pageContent = (
      <PictureContainer sx={{ height: '500px' }}>
        <LargePicture
          component="img"
          src={fetchedPicture?.srcLarge}
          alt={fetchedPicture?.title}
        />
      </PictureContainer>
    );
  } else if (!pictureLoading) {
    navigate('/');
  }

  return pageContent;
};

export default PicturePage;
