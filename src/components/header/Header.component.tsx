import Image from 'next/image';
import { HeaderStyled } from './Header.styled.component';

import { Button, Input } from '@/components';
import { useModal } from '@/hooks';
import logo from '@/resource/my_unsplash_logo.svg'

const Header = () => {
  const showModal = useModal(state => state.showModal);

  return (
    <HeaderStyled>
      <div>
        <Image
          src={logo}
          alt="Logo"
        />
        <Input
          border="gray"
          placeholder="Search by name"
        />
      </div>

      <Button onClick={() => showModal('adding')}>
        Add a photo
      </Button>
    </HeaderStyled>
  )
}

export default Header;
