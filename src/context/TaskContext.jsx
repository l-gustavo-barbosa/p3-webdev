import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  const addCategory = (name) => {
    if (!categories.find(c => c.name === name)) {
      setCategories([...categories, { name, tasks: [] }])
    }
  }

  const addTask = (categoryName, taskText) => {
    setCategories(prev => prev.map(cat => {
      if (cat.name === categoryName) {
        return { ...cat, tasks: [...cat.tasks, { text: taskText, done: false }] }
      }
      return cat
    }))
  }

  const toggleTask = (categoryName, index) => {
    setCategories(prev => prev.map(cat => {
      if (cat.name === categoryName) {
        const updatedTasks = cat.tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t)
        return { ...cat, tasks: updatedTasks }
      }
      return cat
    }))
  }

  return (
    <TaskContext.Provider value={{ categories, addCategory, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)