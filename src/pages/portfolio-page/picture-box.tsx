import { styled, Box } from '@mui/material';

const PictureBox = styled(Box)({
  width: '300px',
  height: '300px',
  position: 'relative',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.9',
  },
});

export default PictureBox;
