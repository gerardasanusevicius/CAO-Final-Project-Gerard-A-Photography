import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { baseFontSize } from '../../helpers/structure-constants';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  paddingRight: '4rem',
  fontSize: baseFontSize,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  transition: theme.transitions.create('color'),

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
  },
}));

export default NavbarLink;
