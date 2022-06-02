import React from 'react';
import { useParams } from 'react-router-dom';
import PictureContainer from '../portfolio-page/picture-container';
import { selectPortfolioPictureById } from '../../store/features/portfolio/portfolio-selectors';
import { useRootSelector } from '../../store/hooks';

const PicturePage: React.FC = () => {
//   const picture = useRootSelector(selectPortfolioPictureById);
  const { id } = useParams();

  return (
    <div>
      now showing
      {' '}
      {id}
    </div>
  );
};

export default PicturePage;
