import { styled, Box } from '@mui/material';
import { smallPicSize } from '../../helpers/structure-constants';

type SmallPictureProps = {
  src: string | undefined,
  alt: string | undefined,
};

const SmallPicture = styled(Box)<SmallPictureProps>({
  width: smallPicSize,
  height: smallPicSize,
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem',
  paddingBottom: '1rem',
  position: 'relative',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.9',
  },
});

export default SmallPicture;
