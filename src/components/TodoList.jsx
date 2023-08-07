import { Droppable, Draggable } from '@hello-pangea/dnd'

import TodoItem from './TodoItem'

const TodoList = ({ todos, removeTodo, completeTodo }) => {
    return (
        <Droppable droppableId='todos'>
            {
                (droppableProvided) => (
                    <div
                        className='bg-white overflow-hidden rounded-t-md mt-8 dark:bg-gray-800 transition-all duration-500'
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                    >
                        {
                            todos.map((todo, index) => (
                                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                    {
                                        (draggableProvided) => (
                                            <TodoItem 
                                                todo={todo} 
                                                removeTodo={removeTodo} 
                                                completeTodo={completeTodo}
                                                /* Si esto fuese un elemento comun (como li) alcanza con mandarle el ref
                                                Pero al ser un componente hay que hacer un par de cambios en el TodoItem */
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                {...draggableProvided.draggableProps}
                                            />
                                        )
                                    }
                                </Draggable>
                            ))
                        }
                        {droppableProvided.placeholder}
                    </div>
                )
            }
        </Droppable>
    )
}

export default TodoList