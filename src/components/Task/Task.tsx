import { memo } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'

import * as S from './Task.styles'

type TaskProps = {
  checked?: boolean
  task: string
  onChange?: () => void
  onDeleteClick?: () => void
}

function TaskComponent({ checked = false, task, onChange, onDeleteClick }: TaskProps) {
  return (
    <S.Container checked={checked}>
      <S.Radio>
        <input type="radio" checked={checked} onChange={onChange} />
        <div>
          {checked && <BsCheck2 />}
        </div>
      </S.Radio>

      <span>{task}</span>

      <S.DeleteButton onClick={onDeleteClick}>
        <FaRegTrashAlt size={14} />
      </S.DeleteButton>
    </S.Container>
  )
}

export const Task = memo(TaskComponent, (prevProps, nextProps) => {
  return prevProps.checked === nextProps.checked && prevProps.task === nextProps.task
})
