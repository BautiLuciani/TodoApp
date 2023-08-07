import React from 'react'
import CheckedIcon from './icons/CheckedIcon'
import Crossicon from './icons/Crossicon'

/* Al ser un componente hay que aplicar un par de cambios para que el ref funcione
1. La funcion va a estar dentro de React.forwardRef 
2. Debemos agregar como segundo parametro el 'ref'
3. Agregamos el ref al elemento padre que retornamos */

/* 
a. Agregamos el rest opertor en los primeros parametros
b. Agregamos el rest opertor al elemento padre que retornamos
*/

const TodoItem = React.forwardRef(({ todo, removeTodo, completeTodo, ...props }, ref) => {

    const { id, title, completed } = todo

    return (
        <article {...props} ref={ref} className='flex gap-4 p-4 border-b border-b-gray-400'>
            {
                completed
                    ? (
                        <button onClick={()=>completeTodo(id)} className=' flex justify-center items-center h-5 w-5 rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <CheckedIcon />
                        </button>
                    )
                    : (<button onClick={()=>completeTodo(id)} className='inline-block h-5 w-5 rounded-full border-2'></button>)
            }
            <p className={`text-gray-600 dark:text-white grow ${completed && 'line-through text-gray-300'}`}>{title}</p>
            <button onClick={()=>removeTodo(id)}>
                <Crossicon />
            </button>
        </article>
    )
})

export default TodoItem