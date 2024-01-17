
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
 

  return (
    <div className=' flex flex-col items-center justify-center '>
      <h1 className=' text-white font-bold text-lg'>LEARN ABOUT REDUX</h1>
      <AddTodo/>
      <Todo />
    </div>
  )
}

export default App
