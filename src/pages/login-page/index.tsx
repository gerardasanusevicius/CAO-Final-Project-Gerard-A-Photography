import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthForm from './auth-form';
import { useRootSelector } from '../../store';
import { selectAuthLoading } from '../../store/selectors';
import { createLoginActionThunk } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';

type LoginValues = {
  username: string,
  password: string,
  showPassword: boolean,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  username: '',
  password: '',
  showPassword: false,
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required'),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();
  const [showHidePassword, changeShowHidePassword] = useState(false);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ username, password }) => {
    const redirect = searchParams.get('redirect') ?? '/admin';
    const loginAction = createLoginActionThunk({ username, password }, redirect);
    dispatch(loginAction);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <AuthForm
      formTitle="Authorization"
      submitText="Login"
      btnActive={dirty && isValid}
      onSubmit={handleSubmit}
    >
      <TextField
        type="username"
        label="Username"
        name="username"
        fullWidth
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
        disabled={loading}
        required
        sx={{
          '& fieldset': {
            borderRadius: 0,
          },
        }}
      />
      <TextField
        type={showHidePassword ? 'text' : 'password'}
        label="Password"
        name="password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
        required
        sx={{
          '& fieldset': {
            borderRadius: 0,
          },
        }}
        InputProps={{
          endAdornment:
  <InputAdornment position="end">
    <IconButton
      onClick={() => changeShowHidePassword(!showHidePassword)}
    >
      {showHidePassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>,
        }}
      />
    </AuthForm>
  );
};

export default LoginPage;
