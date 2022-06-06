import { styled, Link } from '@mui/material';

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  paddingLeft: '2rem',
  transition: theme.transitions.create('color'),
}));

export default SocialLink;
