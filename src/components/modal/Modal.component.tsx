import { FC, ReactNode, useRef } from 'react';

import { useModal, useOnClickOutside } from '@/hooks';
import { ModalContainer } from './Modal.styled.component';

interface Props {
  children: ReactNode;
  show?: boolean;
}
const Modal: FC<Props> = ({ children, show = false }) => {
  const ref: any = useRef();
  const { hiddenModal, action } = useModal(state => state);

  useOnClickOutside(ref, hiddenModal);

  if (!action) return null;

  return (
    <ModalContainer show={show}>
      <div ref={ref}>
        {children}
      </div>
    </ModalContainer>
  )
}

export default Modal;
