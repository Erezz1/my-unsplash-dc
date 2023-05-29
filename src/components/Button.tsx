import styled from 'styled-components';
import { type Theme, theme } from '@/theme';

interface Props {
  colorScheme?: Theme
}
export const Button = styled.button<Props>`
  background: ${({ colorScheme = 'success' }) => theme.color(colorScheme)};
  color: ${({ colorScheme }) => colorScheme === 'ghost' ? '#333333' : '#FFFFFF'};
  box-shadow: ${({ colorScheme }) => colorScheme !== 'ghost' ? '0px 1px 6px rgba(0, 0, 0, 0.1)' : 'none'};
  border-radius: 12px;
  padding: 15px;
  font-size: 1rem;
  border: none;
  transition: all ${theme.transitionDuration};
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${({ colorScheme = 'success' }) => colorScheme !== 'ghost' ? `${theme.color(colorScheme)}99` : '#EEEEEE99'};
  }
`;
