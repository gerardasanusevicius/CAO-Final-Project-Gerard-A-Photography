import { Box, Button } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createPortfolioDeletePictureThunkAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';

type PictureBoxExtraProps = {
  id: string,
};

const PictureBoxExtra: React.FC<PictureBoxExtraProps> = ({ id }) => {
  const dispatch = useRootDispatch();

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          position: 'absolute',
          top: '0px',
          right: '0px',
          ':hover': {
            color: 'primary.light',
          },
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
          ':hover': {
            color: 'primary.light',
          },
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
          ':hover': {
            color: 'primary.light',
          },
        }}
        onClick={() => alert('feature coming soon')}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default PictureBoxExtra;
