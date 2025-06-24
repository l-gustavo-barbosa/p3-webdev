import { useState } from 'react'
import { useTask } from '../context/TaskContext'

export default function AddTask({ categoryName }) {
  const [text, setText] = useState('')
  const { addTask } = useTask()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTask(categoryName, text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova tarefa" />
      <button type="submit">Adicionar</button>
    </form>
  )
}

