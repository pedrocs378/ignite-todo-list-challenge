import { useMemo } from 'react'

import { ClipboardIcon } from '../icons/Clipboard'
import { Task } from '../Task/Task'

import { useTasks } from '../../contexts/TasksContext'

import * as S from './Tasks.styles'

export function Tasks() {
  const { tasks, deleteTask, toggleTask } = useTasks()

  const concludedTasks = useMemo(() => {
    return tasks.filter((task) => task.isConcluded)
  }, [tasks])

  return (
    <S.Container>
      <S.TasksInfo>
        <div>
          <strong>Tarefas criadas</strong>
          <S.Badge>{tasks.length}</S.Badge>
        </div>

        <div>
          <strong>Concluidas</strong>
          <S.Badge>
            {!tasks.length ? '0' : `${concludedTasks.length} de ${tasks.length}`}
          </S.Badge>
        </div>
      </S.TasksInfo>

      <S.TasksList>
        {!tasks.length ? (
          <S.EmptyTasks>
            <ClipboardIcon />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </S.EmptyTasks>
        ) : tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task.details}
              checked={task.isConcluded}
              onChange={() => toggleTask(task.id)}
              onDeleteClick={() => deleteTask(task.id)}
            />
          )
        })}
      </S.TasksList>
    </S.Container>
  )
}