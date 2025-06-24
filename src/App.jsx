import { TaskProvider } from './context/TaskContext'
import AddCategory from './components/AddCategory'
import CategoryList from './components/CategoryList'

export default function App() {
  return (
    <TaskProvider>
      <div className='container'>
        <h1>Gerenciador de Tarefas</h1>
        <AddCategory />
        <CategoryList />
      </div>
    </TaskProvider>
  )
}