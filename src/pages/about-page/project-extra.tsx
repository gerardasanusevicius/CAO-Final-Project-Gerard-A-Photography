import { Box, Button } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { createDeleteProjectThunkAction } from '../../store/action-creators';
import { selectAuthToken } from '../../store/selectors';

type ProjectExtraProps = {
  id: string,
};

const ProjectExtra: React.FC<ProjectExtraProps> = ({ id }) => {
  const dispatch = useRootDispatch();
  const token = useRootSelector(selectAuthToken);

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={() => { dispatch(createDeleteProjectThunkAction(id, token as string)); }}
      >
        <ClearIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={() => { alert('feature coming soon'); }}
      >
        <ArrowDropDownIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          zIndex: '5',
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={() => { alert('feature coming soon'); }}
      >
        <ArrowDropUpIcon />
      </Button>
    </Box>
  );
};

export default ProjectExtra;
