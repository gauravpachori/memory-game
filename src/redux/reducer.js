import * as types from "./types"

const initialState = {
    level: 1,
    score: 0,
    timer: '00:00',
    blocks: {
        data: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 0 },
            { id: 4, value: 1 },
        ],
        grid: 2
    }
};

export default data = function(state = initialState, action) {
    switch(action.type) {
        case types.TIMER:
            return {
                ...state,
                timer: action.data
            };
        case types.BLOCKS:
            return {
                ...state,
                score: state.level * 10,
                timer: '00:00',
                level: state.level + 1,
                blocks: action.data
            };
        default:
            return state;
    }
}