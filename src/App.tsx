import { RocketIcon } from './components/icons/RocketIcon'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'

import * as S from './App.styles'
import { TasksProvider } from './contexts/TasksContext'

function App() {
  return (
    <S.Container>
      <S.Header>
        <RocketIcon />
        <h1>to<span>do</span></h1>
      </S.Header>

      <main>
        <TasksProvider>
          <NewTask />

          <Tasks />
        </TasksProvider>
      </main>
    </S.Container>
  )
}

export { App }
