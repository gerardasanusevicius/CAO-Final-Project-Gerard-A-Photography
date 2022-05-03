import { styled, Typography } from '@mui/material';

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '13.5px',
  letterSpacing: '1.5px',
  color: theme.palette.primary.dark,
}));

export default Paragraph;
