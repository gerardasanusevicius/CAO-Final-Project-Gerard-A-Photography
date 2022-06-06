import { Button } from '@mui/material';
import React from 'react';
import { baseFontSize } from '../../helpers/structure-constants';

type CustomButtonProps = {
  btnLabel: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
};

const CustomButton: React.FC<CustomButtonProps> = ({ btnLabel, type, onClick }) => (
  <Button type={type} onClick={onClick} sx={{ ':hover': { color: 'primary.dark', background: 'none', fontSize: baseFontSize } }}>{btnLabel}</Button>
);

export default CustomButton;
