import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 3.375rem;
  margin-top: calc(-3.375rem / 2);

  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0 1rem;

    border-radius: var(--br-default);
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
    background-color: var(--gray-500);

    &::placeholder {
      color: var(--gray-300);
    }
  }
`

export const NewTaskButton = styled.button`
  border: 0;
  border-radius: var(--br-default);
  padding: 1rem;

  background-color: var(--blue-dark);
  color: var(--gray-100);
  font-weight: var(--fw-bold);

  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: background-color 0.2s ease;

  &:not(:disabled):hover {
    background-color: var(--blue);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
