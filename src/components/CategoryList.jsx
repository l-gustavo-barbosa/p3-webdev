import { useTask } from '../context/TaskContext'
import TaskList from './TaskList'

export default function CategoryList() {
  const { categories } = useTask()

  return (
    <div>
      {categories.map((category, index) => (
        <TaskList key={index} category={category} />
      ))}
    </div>
  )
}