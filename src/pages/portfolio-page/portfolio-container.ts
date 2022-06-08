import { styled, Box } from '@mui/material';

const PortfolioContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 20rem)',
  gridGap: '1,1rem',
  justifyContent: 'space-around',
});

export default PortfolioContainer;
