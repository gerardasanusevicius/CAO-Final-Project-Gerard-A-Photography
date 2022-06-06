import { Button, SxProps, Theme } from '@mui/material';
import React from 'react';

type CustomButtonProps = {
  btnLabel: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  sx?: SxProps<Theme>,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  btnLabel, type, onClick, sx,
}) => (
  <Button
    type={type}
    onClick={onClick}
    sx={{
      ':hover': {
        color: 'primary.dark',
        background: 'none',
      },
      ...sx,
    }}
  >
    {btnLabel}
  </Button>
);

export default CustomButton;
