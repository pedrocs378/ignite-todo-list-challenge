import { ChangeEvent, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import * as S from './NewTask.styles'

export function NewTask() {
  const [newTaskText, setNewTaskText] = useState('')

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value)
  }

  return (
    <S.Container>
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