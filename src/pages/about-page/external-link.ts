import { styled, Button } from '@mui/material';

const ExternalLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '13.5px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: theme.transitions.create('color'),
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
