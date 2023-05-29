import { theme } from '@/theme';
import styled from 'styled-components';

export const ImageContainer = styled.article`
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #00000090;
    display: none;

    h3 {
      position: absolute;
      color: #FFFFFF;
      bottom: 2rem;
      left: 1rem;
    }

    button {
      position: absolute;
      top: 20px;
      right: 20px;
      border-radius: 40px;
      padding: 5px 1rem;
      background-color: #00000000;
      border: 2px solid ${theme.color('danger')};
      color: ${theme.color('danger')};
      font-weight: 700;
      cursor: pointer;
      transition: all ${theme.transitionDuration};

      &:hover {
        color: #FFFFFF;
        background-color: ${theme.color('danger')};
      }
    }
  }

  &:hover div {
    display: block;
  }
`;
