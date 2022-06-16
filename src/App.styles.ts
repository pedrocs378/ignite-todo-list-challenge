import styled from 'styled-components';

export const Container = styled.div`
  main {
    max-width: 742px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`

export const Header = styled.header`
  background-color: var(--gray-700);
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  h1 {
    font-size: 2.5rem;
    font-weight: var(--fw-black);
    color: var(--blue);

    span {
      color: var(--purple);
    }
  }
`
