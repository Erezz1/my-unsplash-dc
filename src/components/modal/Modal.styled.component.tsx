import styled from 'styled-components';

interface Props {
  show: boolean;
}
export const ModalContainer = styled.div<Props>`
  display: ${({ show }) => show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000080;

  div {
    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    display: grid;
    gap: 1.5rem;
    width: 90%;
    max-width: 500px;

    h2 {
      font-family: 'Noto Sans';
      font-size: 24px;
      font-weight: normal;
    }

    main {
      display: grid;
      gap: 1.5rem;

      label {
        display: grid;
        gap: 10px;
        font-family: 'Noto Sans';
        font-family: 14px;
      }
    }

    footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
  }
`;
