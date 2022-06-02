import { styled, Button } from '@mui/material';

const ExternalLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.primary.main,
  fontSize: '13.5px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  margin: '0 auto',

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
    background: 'none',
  },
}));

export default ExternalLink;
