import { styled, Typography } from '@mui/material';

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  letterSpacing: '0.1rem',
  color: theme.palette.primary.dark,
}));

export default Paragraph;
