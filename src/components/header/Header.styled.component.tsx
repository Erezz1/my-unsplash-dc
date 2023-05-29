import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }

  & input {
    width: 300px;
    display: none;
  }

  @media (min-width: 700px) {
    & input {
      display: inline;
    }
  }
`;
