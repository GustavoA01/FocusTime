import {change} from './toggle-mode.js'
import * as FocusTimer from './timer.js'
import { registerControls } from './events.js'
import { start } from './index.js'
import * as actions from './actions.js'
import { seconds } from './elements.js'
import state from './state.js'

registerControls()

document.addEventListener('keydown', (event)=>{
    if(event.code == 'Space'){
        if(state.isRunninig){
            actions.pause()
        }else{
            actions.toggleRunning()
        }
    }
})
FocusTimer.updateDisplay()
