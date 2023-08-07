
const TodoFilter = ({filter, setFilter}) => {
    return (
        <section className='container mx-auto mt-8'>
            <div className='dark:bg-gray-800 bg-white flex justify-around p-4 rounded-md transition-all duration-500'>
                <button 
                    onClick={()=>setFilter('All')} 
                    className={`dark:text-gray-400 hover:text-blue-600 ${filter === 'All' && 'dark:text-white text-blue-600'}`}
                >
                    All
                </button>
                <button 
                    onClick={()=>setFilter('Active')} 
                    className={`dark:text-gray-400 hover:text-blue-600 ${filter === 'Active' && 'dark:text-white text-blue-600'}`}
                    >Active
                </button>
                <button 
                    onClick={()=>setFilter('Completed')} 
                    className={`dark:text-gray-400 hover:text-blue-600 ${filter === 'Completed' && 'dark:text-white text-blue-600'}`}
                    >Completed
                </button>
            </div>
        </section>
    )
}

export default TodoFilter