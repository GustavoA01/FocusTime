import * as actions from "./actions.js"
import * as el from './elements.js'
const controls = document.getElementById('controls')
import { updateDisplay } from "./timer.js"
import state from "./state.js"

export function registerControls() {
    controls.addEventListener('click', (event)=>{
        const action = event.target.dataset.action
        actions[action]()
    })

}

export function setMinutes(){
    el.minutes.addEventListener('focus',()=>{
        el.minutes.textContent = ""
    })
    
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
    
    el.minutes.addEventListener('blur',(event)=>{
        let time = event.currentTarget.textContent
        console.log(time)
        time = time > 60? 60:time
        console.log(time)
        state.minutes = time
        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })

}