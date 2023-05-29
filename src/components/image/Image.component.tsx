import { FC } from 'react';

import { useModal } from '@/hooks';
import { ImageContainer } from './Image.styled.component';

interface Props {
  id: string;
  label: string;
  url: string;
  date: Date;
}
const Image: FC<Props> = ({ label, url }) => {
  const { showModal } = useModal(state => state);

  return (
    <ImageContainer>
      <img
        alt={`Imagen de ${label}`}
        src={url}
      />

      <div>
        <h3>{label}</h3>
        <button onClick={() => showModal('deleting')}>delete</button>
      </div>
    </ImageContainer>
  )
}

export default Image;
