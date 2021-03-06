import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 4rem;
`

export const TasksInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--blue);

    &:last-child {
      color: var(--purple);
    }

    strong {
      font-size: var(--fs-sm);
    }
  }
`

export const Badge = styled.span`
  padding: 0.125rem 0.5rem;

  font-weight: var(--fw-bold);
  font-size: var(--fs-xs);
  background-color: var(--gray-400);
  color: var(--gray-200);
  border-radius: 50%;
`

export const TasksList = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const EmptyTasks = styled.div`
  height: 244px;
  line-height: 1.4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-bottom: 1rem;
  }
`