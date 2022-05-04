import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';

const AboutPage: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: '80px',
    m: '0px',
  }}
  >
    <Paragraph sx={{
      width: '30%',
    }}
    >
      <Divider />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ad placeat excepturi harum sit blanditiis, expedita officia earum, modi assumenda totam illo exercitationem ipsum enim maxime temporibus eveniet optio iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium mollitia a accusamus maxime aut iusto nobis, eos voluptas est incidunt quibusdam nemo corporis perferendis, modi illum voluptates placeat ex?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident mollitia, necessitatibus molestias nemo quo, distinctio ratione ipsum excepturi nobis omnis adipisci quos repellendus odio esse! Impedit sint at dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium beatae expedita corporis sapiente, doloremque dolores accusamus optio placeat sint autem? Consequatur, iste! Reiciendis molestiae quod quis earum nihil provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex reiciendis alias veniam quaerat at exercitationem ratione, autem ipsum animi voluptates? Quisquam nihil culpa inventore ipsa consectetur optio impedit sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit dolorum necessitatibus voluptates dolores blanditiis exercitationem a veniam consequatur. Minima eum, adipisci asperiores dignissimos harum provident deleniti facilis sapiente officiis.
      <Divider />
    </Paragraph>
    <Box
      component="img"
      src={AboutPicture}
      alt="gerard_about_pic"
      sx={{
        width: '450px',
        height: '450px',
      }}
    />
  </Box>
);

export default AboutPage;
