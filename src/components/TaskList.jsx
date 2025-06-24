import { useTask } from '../context/TaskContext'
import AddTask from './AddTask'

export default function TaskList({ category }) {
  const { toggleTask } = useTask()

  return (
    <div className='category-group'>
      <h3>{category.name}</h3>
      <ul>
        {category.tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(category.name, index)} />
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} className={task.done? 'done' : ''}>{task.text}</span>
          </li>
        ))}
      </ul>
      <AddTask categoryName={category.name} />
    </div>
  )
}