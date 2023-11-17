import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    let m = Number(el.minutes.textContent)
    let s = Number(el.seconds.textContent)
    state.isRunninig = true
    document.documentElement.classList.toggle('running')
    timer.countDown()
    state.minutes = m
    state.seconds = s
}

export function reset(){
    state.isRunninig = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay(state.minutes,state.seconds)
}

export function pause(){
    state.isRunninig = false
    document.documentElement.classList.toggle('running')
}

export function set(){
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
    el.seconds.setAttribute('contenteditable',true)
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    if(state.isMute){
        sounds.buttonPressAudio.play()
        return
    }

    sounds.buttonPressAudio.pause()
}


