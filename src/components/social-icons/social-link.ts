import { styled, Link } from '@mui/material';

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  marginLeft: '2rem',
  [theme.breakpoints.down('md')]: {
    margin: '1rem',
  },
  transition: theme.transitions.create('color'),
}));

export default SocialLink;
