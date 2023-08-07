import { useEffect, useState } from 'react'
import Moonicon from './icons/Moonicon'
import SunIcon from './icons/SunIcon'

const initialState = localStorage.getItem('theme') === 'dark'

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialState)

    useEffect(() => {
        /* Si el darkMode es true se agrega class='dark' al html de 'index.html'
        Este se ocupa de activar todas las clases 'dark' que se encuentren en los componentes */
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
    

    return (
        <header className='container mx-auto px-4 pt-8 md:max-w-xl'>
            <div className='flex justify-between'>
                <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.3rem]'>Todo</h1>
                <button onClick={()=>setDarkMode(!darkMode)}>
                    {
                        darkMode
                        ? <SunIcon/>
                        : <Moonicon/>
                    }
                </button>
            </div>
        </header>
    )
}

export default Header