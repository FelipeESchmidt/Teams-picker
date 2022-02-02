import * as Actions from "./Options.types";

const defaultOptions = {
    captainMode: false,
}

export default function reducer(state = { ...defaultOptions }, action) {
    switch (action.type) {
        case Actions.INVERT_ENABLE_CAPTAIN:
            return { ...state, captainMode: !state.captainMode };
        
        default:
            return state;
    }
}