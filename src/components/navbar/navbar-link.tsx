import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 4),
  fontSize: '13.5px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: theme.transitions.create('color'),

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
  },
}));

export default NavbarLink;
