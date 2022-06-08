import React from 'react';
import PictureUploadForm from './picture-upload-form';
import InfoContainer from '../../components/info-container';
import Navbar from '../../components/navbar/index';
import ProjectUploadForm from './project-upload-form';
import CustomButton from '../../components/custom-button/custom-button';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';

const AdminPage: React.FC = () => {
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  return (
    <>
      <Navbar />
      <InfoContainer>
        <PictureUploadForm />
        <ProjectUploadForm />
      </InfoContainer>
      <CustomButton sx={{ display: { xxs: 'block', lg: 'none' }, m: '3rem auto 0 auto' }} onClick={logout} btnLabel="Logout" />
    </>
  );
};

export default AdminPage;
