import { styled, Link } from '@mui/material';

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  fontSize: '13.5px',
  transition: theme.transitions.create('color'),
}));

export default SocialLink;
