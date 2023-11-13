export const SET_MSGS = 'SET_MSGS'
export const ADD_MSG = 'ADD_MSG'
// export const REMOVE_ROBOT = 'REMOVE_ROBOT'
// export const UPDATE_ROBOT = 'UPDATE_ROBOT'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
    msgs: null,
    filterBy: {
        email: '',
        text: '',
    }
}

export function msgsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_MSGS:
            return {
                ...state,
                msgs: action.msgs
            }
        case ADD_MSG:
            return {
                ...state,
                msgs: [...state.msgs, action.msg]
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}