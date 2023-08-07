/* Todo este codigo esta sacado de la documentacion oficial
Es copiado y pegado */

/* Este if verifica si hay un theme almacenado en el localstorage
En caso de que no lo haya va a verificar cual es la preferencia del usuario en el sistema operativo,
es decir que si el usuario en su sistema operativo tiene como preferencia el dark entonces la pagina
se la va a mostrar con el theme dark desde un principio */
if(
    localStorage.theme === 'dark' ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
){
    document.documentElement.classList.add("dark")
    localStorage.theme = 'dark'
} else {
    document.documentElement.classList.remove("dark")
    localStorage.theme = 'light'
}
