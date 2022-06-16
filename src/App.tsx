import { RocketIcon } from './components/icons/RocketIcon'
import { ClipboardIcon } from './components/icons/Clipboard'
import { NewTask } from './components/NewTask/NewTask'
import { Task } from './components/Task/Task'

import * as S from './App.styles'

function App() {
  return (
    <S.Container>
      <S.Header>
        <RocketIcon />
        <h1>to<span>do</span></h1>
      </S.Header>

      <main>
        <NewTask />

        <S.TasksContainer>
          <S.TasksInfo>
            <div>
              <strong>Tarefas criadas</strong>
              <S.Badge>0</S.Badge>
            </div>

            <div>
              <strong>Concluidas</strong>
              <S.Badge>0</S.Badge>
            </div>
          </S.TasksInfo>

          <S.TasksList>
            <Task task="Teste" />
            <S.EmptyTasks>
              <ClipboardIcon />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </S.EmptyTasks>
          </S.TasksList>
        </S.TasksContainer>
      </main>
    </S.Container>
  )
}

export { App }
