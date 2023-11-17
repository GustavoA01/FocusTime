import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes,seconds){
    start.minutes = minutes
    start.seconds = seconds

    timer.updateDisplay()
    events.registerControls();
    events.setMinutes()
}