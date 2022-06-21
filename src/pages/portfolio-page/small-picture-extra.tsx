import { Box, Button, ButtonProps } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createPortfolioDeletePictureThunkAction, createPortfolioShiftPictureLeftActionThunk, createPortfolioShiftPictureRightActionThunk } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { smallPicSize } from '../../helpers/structure-constants';
import { selectAuthToken } from '../../store/selectors';

type SmallPictureExtraProps = {
  id: string,
  index: number,
  totalEl: number,
};

const SmallPictureExtra: React.FC<SmallPictureExtraProps> = ({ id, index, totalEl }) => {
  const dispatch = useRootDispatch();
  const token = useRootSelector(selectAuthToken);
  // if (token === null) {
  //   throw new Error('')
  // }

  const deletePicture: ButtonProps['onClick'] = (e) => {
    e.stopPropagation();
    dispatch(createPortfolioDeletePictureThunkAction(id, token as string));
  };

  const shiftImageLeft: ButtonProps['onClick'] = (e) => {
    e.stopPropagation();
    alert('feature coming soon');
    // if (index > 0) {
    //   dispatch(createPortfolioShiftPictureLeftActionThunk(id, token as string));
    // }
  };

  const shiftImageRight: ButtonProps['onClick'] = (e) => {
    e.stopPropagation();
    alert('feature coming soon');
    // if (index < totalEl - 1) {
    //   dispatch(createPortfolioShiftPictureRightActionThunk(id, token as string));
    // }
  };

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
        onClick={deletePicture}
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
        onClick={shiftImageLeft}
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
        onClick={shiftImageRight}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default SmallPictureExtra;
