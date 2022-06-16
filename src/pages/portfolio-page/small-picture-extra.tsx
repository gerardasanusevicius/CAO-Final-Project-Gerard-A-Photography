import { Box, Button } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createPortfolioDeletePictureThunkAction } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { smallPicSize } from '../../helpers/structure-constants';
import { selectAuthToken } from '../../store/selectors';

type SmallPictureExtraProps = {
  id: string,
};

const SmallPictureExtra: React.FC<SmallPictureExtraProps> = ({ id }) => {
  const dispatch = useRootDispatch();
  const token = useRootSelector(selectAuthToken);

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          ':hover': {
            color: 'primary.light',
          },
        }}
        onClick={(e) => { e.stopPropagation(); dispatch(createPortfolioDeletePictureThunkAction(id, token as string)); }}
      >
        <ClearIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          position: 'absolute',
          top: `calc(0.5 * ${smallPicSize})`,
          left: 0,
          ':hover': {
            color: 'primary.light',
          },
        }}
        onClick={(e) => { e.stopPropagation(); alert('feature coming soon'); }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          position: 'absolute',
          top: `calc(0.5 * ${smallPicSize})`,
          right: 0,
          ':hover': {
            color: 'primary.light',
          },
        }}
        onClick={(e) => { e.stopPropagation(); alert('feature coming soon'); }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default SmallPictureExtra;
