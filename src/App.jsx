import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'

const initialState = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex)=>{
  /* Hacemos una copia de los todos */
  const result = [...list]
  /* Obtenemos el todo en el cual se hizo drag
  Con el startIndex sabemos la posicion del elemento, y el 1 significa que solo agarre ese unico elemento */
  const [remove] = result.splice(startIndex, 1)
  /* Reordenamos el todo una vez que se hizo el drop
  Con endIndex sabemos la posicion la cual el elemento se solto
  Con el 0 le indicamos que coloque el todo en la posicion del endIndex
  y el 'remove' almacena el todo el cual queremos que coloque */
  result.splice(endIndex, 0, remove)

  /* Retornamos el arreglo de todos reordenado */
  return result
}

const App = () => {

  const [todos, setTodos] = useState(initialState)

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const clearTodo = () => {
    setTodos([])
  }

  const clearComplete = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const itemLeft = todos.filter(todo => !todo.completed).length

  const [filter, setFilter] = useState('All')

  const filteredTodos = () => {
    switch (filter) {
      case 'All':
        return todos;
      case 'Active':
        return todos.filter(todo => !todo.completed)
      case 'Completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  useEffect(() => {
    if(todos.length !== 0){
      localStorage.setItem('todos', JSON.stringify(todos))
    } else {
      localStorage.setItem('todos', JSON.stringify([{id: 1, title: 'Agregue una tarea', completed: false}]))
    }
  }, [todos])

  const handleDragEnd = (result)=> {
    /* source.index es la posicion inicial del elemento al agarrarlo y destination.index es la posicion final del elemento al soltarlo */
    const {destination, source} = result
    /* Si el usuario arroja el elemento fuera del contenedor es igual a null
    o si el usuario arroja el elemento en la misma posicion, en ambos casos nos salimos de la funcion para evitar errores*/
    if(!destination) return
    if(source.index === destination.index && source.droppableId === destination.droppableId) return

    /* Seteamos el nuevo orden de los todos */
    setTodos((prevTasks) => reorder(prevTasks, source.index, destination.index))
  }

  return (
    <div
      className='min-h-screen bg-gray-300 dark:bg-gray-700
        bg-[url("src/assets/images/bg-mobile-light.jpg")]
        md:bg-[url("src/assets/images/bg-desktop-light.jpg")]
        dark:bg-[url("src/assets/images/bg-mobile-dark.jpg")]
        md:dark:bg-[url("src/assets/images/bg-desktop-dark.jpg")]
        bg-contain bg-no-repeat 
        transition-all duration-500'
    >

      <Header />

      <main className='container mx-auto mt-8 px-4 md:max-w-xl'>
        <TodoCreate addTodo={addTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filteredTodos()} removeTodo={removeTodo} completeTodo={completeTodo} />
        </DragDropContext>

        <TodoComputed itemLeft={itemLeft} clearComplete={clearComplete} clearTodo={clearTodo} />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>

      <footer className='dark:text-gray-400 mt-8 text-center'>Drag and drop to reorder list</footer>

    </div>
  )
}

export default App