import React from 'react';
import UploadForm from './upload-form';
import InfoContainer from '../../components/info-container';
import Navbar from '../../components/navbar/index';

const AdminPage: React.FC = () => (
  <>
    <Navbar />
    <InfoContainer sx={{ mt: '137.5px' }}>
      <UploadForm />
    </InfoContainer>
  </>
);

export default AdminPage;
