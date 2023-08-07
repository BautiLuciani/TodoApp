import React, { useState } from 'react'

const TodoCreate = ({addTodo}) => {

    const [title, setTitle] = useState('')

    const onHandleSubmit = (e)=> {
        e.preventDefault()

        if(!title.trim()){
            return setTitle('')
        }

        addTodo(title)
        setTitle('')
    }

    return (
        <form 
            onSubmit={onHandleSubmit} 
            className='dark:bg-gray-800 flex bg-white rounded-md overflow-hidden px-4 py-4 gap-4 items-center mt-8 transition-all duration-500'
        >
            <span className='inline-block h-5 w-5 rounded-full border-2'></span>
            <input
                type="text"
                placeholder='Create a new todo...'
                className='dark:bg-gray-800 w-full outline-none text-gray-400 transition-all duration-500'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
    )
}

export default TodoCreate