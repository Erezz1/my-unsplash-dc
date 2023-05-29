import styled from 'styled-components';
import { type Theme, theme } from '@/theme';

interface Props {
  colorScheme?: Theme;
  border?: Theme;
}
export const Input = styled.input<Props>`
  border: 2px solid ${({ border = 'info' }) => theme.color(border)};
  border-radius: 12px;
  padding: 15px;
  font-size: 1rem;
  transition: all ${theme.transitionDuration};

  &:focus {
    border-color: ${({ colorScheme = 'success' }) => theme.color(colorScheme)};
  }
`;
