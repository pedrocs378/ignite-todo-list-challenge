import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: var(--br-default);

  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
    flex: 1;
    color: var(--gray-100);
    font-size: var(--fs-sm);
  }
`

export const Radio = styled.label`
  display: inline-flex;
  height: 1.5rem;
  width: 1.5rem;
  padding: 3.27px;

  div {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid var(--blue);
    color: var(--gray-100);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;
  }

  input {
    display: none;
  }

  input:checked ~ div {
    border-color: var(--purple-dark);
    background-color: var(--purple-dark);
  }

  &:hover div {
    border-color: var(--blue-dark);
    background-color: #1E6F9F20;
  }
`

export const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;

  height: 1.5rem;
  width: 1.5rem;
  border-radius: 4px;
  font-size: 0;

  color: var(--gray-300);

  transition: all 0.2s;

  &:hover {
    background-color: var(--gray-400);
    color: var(--danger);
  }
`
