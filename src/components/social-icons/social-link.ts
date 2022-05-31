import { styled, Link } from '@mui/material';

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  fontSize: '13.5px',
  transition: '0.5s',
}));

export default SocialLink;
