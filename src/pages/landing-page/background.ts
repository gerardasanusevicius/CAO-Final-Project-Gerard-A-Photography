import { styled, Box } from '@mui/material';
import BgImage from './bghorizontal.jpg';

const Background = styled(Box)({
  backgroundImage: `url(${BgImage})`,
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default Background;
