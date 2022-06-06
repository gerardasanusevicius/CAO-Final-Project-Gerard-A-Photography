import { styled, Typography } from '@mui/material';
import { baseFontSize } from '../../helpers/structure-constants';

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: baseFontSize,
  letterSpacing: '0.1rem',
  color: theme.palette.primary.dark,
}));

export default Paragraph;
