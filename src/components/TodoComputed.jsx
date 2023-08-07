
const TodoComputed = ({ itemLeft, clearComplete, clearTodo }) => {

    return (
        <section className='dark:bg-gray-800 p-4 flex justify-around bg-white rounded-b-md transition-all duration-500'>
            <span className='text-gray-400'>{itemLeft} items left</span>
            <button onClick={clearComplete} className='text-gray-400'>Clear completed</button>
            <button onClick={clearTodo} className='text-gray-400'>Clear All</button>
        </section>
    )
}

export default TodoComputed