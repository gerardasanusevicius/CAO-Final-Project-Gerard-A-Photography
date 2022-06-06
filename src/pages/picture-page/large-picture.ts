import { styled, Box } from '@mui/material';

type LargePictureProps = {
  src: string | undefined,
  alt: string | undefined,
};

const LargePicture = styled(Box)<LargePictureProps>({
  maxWidth: '100%',
  height: 'auto',
  margin: '0 auto',
  objectFit: 'contain',
});

export default LargePicture;
