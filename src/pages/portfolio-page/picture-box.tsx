import React from 'react';
import { Box } from '@mui/material';

type PictureBoxProps = {
  id?: string,
  title?: string,
  src?: string,
  extra? : any,
};

const PictureBox: React.FC<PictureBoxProps> = ({
  id, title, src, extra: children,
}) => (
  <Box
    key={id}
    sx={{
      width: '300px',
      height: '300px',
      position: 'relative',
    }}
  >
    <img
      src={src}
      alt={title}
      width="300px"
      height="300px"
    />
    {children}
  </Box>
);

export default PictureBox;
