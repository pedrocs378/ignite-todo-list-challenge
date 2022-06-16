import { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid'

type Task = {
  id: string
  isConcluded: boolean
  details: string
}

type TasksContextData = {
  tasks: Task[]

  createNewTask: (task: string) => void
  deleteTask: (taskId: string) => void
  toggleTask: (taskId: string) => void
}

type TasksProviderProps = {
  children: React.ReactNode
}

const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  const createNewTask = useCallback((task: string) => {
    setTasks((state) => {
      return [...state, { id: v4(), details: task, isConcluded: false }]
    })
  }, [])

  const deleteTask = useCallback((taskId: string) => {
    setTasks((state) => {
      return state.filter((task) => task.id !== taskId)
    })
  }, [])

  const toggleTask = useCallback((taskId: string) => {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isConcluded: !task.isConcluded
          }
        }

        return task
      })
    })
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, createNewTask, deleteTask, toggleTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}
