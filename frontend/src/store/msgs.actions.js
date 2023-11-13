import {msgsService} from '../services/msgs.service.js'
import { msgsReducer } from './msgs.reducer';
import { store } from './store.js';
import {SET_MSGS,ADD_MSG,SET_FILTER_BY} from './msgs.reducer.js'

export async function loadMsgs() {
    try {
        const filterBy = store.getState().msgsModule.filterBy
        const msgs = await msgsService.query(filterBy)
        const action = {
            type: SET_MSGS,
            msgs
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

}

export async function saveMsg(msg) {
    try {
        await msgsService.save(msg)
        const action = {
            type: ADD_MSG,
            msg
        }
        store.dispatch(action)
    } catch (err) {
        console.log('couldnt save msg', err)
        throw err
    }
}

export async function removeRobot(robotId) {
    try {
        await robotService.remove(robotId)
        const action = {
            type: REMOVE_ROBOT,
            robotId
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

}

export async function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}