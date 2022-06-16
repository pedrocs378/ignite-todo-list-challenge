import { ChangeEvent, FormEvent, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import { useTasks } from '../../contexts/TasksContext'

import * as S from './NewTask.styles'

export function NewTask() {
  const [newTaskText, setNewTaskText] = useState('')

  const { createNewTask } = useTasks()

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()

    createNewTask(newTaskText)

    setNewTaskText('')
  }

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value)
  }

  return (
    <S.Container onSubmit={handleCreateNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleChangeTask}
      />

      <S.NewTaskButton type="submit" disabled={!newTaskText.trim()}>
        Criar <FiPlusCircle />
      </S.NewTaskButton>
    </S.Container>
  )
}