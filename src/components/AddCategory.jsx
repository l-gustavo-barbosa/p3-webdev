import { useState } from 'react'
import { useTask } from '../context/TaskContext'

export default function AddCategory() {
  const [name, setName] = useState('')
  const { addCategory } = useTask()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      addCategory(name.trim())
      setName('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nova categoria" />
      <button type="submit">Adicionar</button>
    </form>
  )
}