const togglebutton = document.querySelector('.toggle-mode')

export const change = togglebutton.onclick = () => {
    document.documentElement.classList.toggle('light')
}


