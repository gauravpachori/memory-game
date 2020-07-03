import * as types from "./types";
import store from ".";

let timer;

export const updateTimer = () => (dispatch => {
    timer = setInterval(() => {
        const time = store.getState().data.timer;

        let secs = parseInt(time.split(':')[1]);
        secs = secs < 60 ? (secs + 1).toString().padStart(2, 0) : '00';

        let mins = parseInt(time.split(':')[0]);
        mins = secs === '00' ? (mins + 1).toString().padStart(2, 0) : time.split(':')[0]

        dispatch({
            type: types.TIMER,
            data: mins + ':' + secs
        });
    }, 1000);
})

export const updateBlocks = () => (dispatch => {
    clearInterval(timer);
    const data = store.getState().data;
    if (data.level === 10) {
        alert('done!');
    } else {
        const blocks = getBlocks(data.level);
        dispatch ({
            type: types.BLOCKS,
            data: blocks
        })
    }
})

function getBlocks(index) {
    const blocks = { data: [], grid: levels[index].grid }
    const data = levels[index].items;
    for (let i = 1; i <= data.length; i++) {
        blocks.data.push({
            id: i,
            value: data[i-1]
        })
    }
    return blocks;
}

const levels = [{
    grid: 2,
    items: [0,1,0,1]
},{
    grid: 3,
    items: [0,1,2,2,0,1]
},{
    grid: 4,
    items: [3,0,1,2,3,2,0,1]
},{
    grid: 4,
    items: [3,4,0,1,4,2,2,0,1,3]
},{
    grid: 4,
    items: [5,5,3,4,0,1,4,2,2,0,1,3]
},{
    grid: 4,
    items: [6,3,4,6,5,0,1,4,2,2,5,0,1,3]
},{
    grid: 4,
    items: [6,0,7,1,4,2,3,4,7,6,5,2,5,0,1,3]
},{
    grid: 4,
    items: [6,8,0,7,1,4,2,8,3,4,7,6,5,2,5,0,1,3]
},{
    grid: 4,
    items: [9,6,8,0,7,1,4,2,8,3,4,7,9,6,5,2,5,0,1,3]
},{
    grid: 4,
    items: [7,1,4,9,6,8,0,10,10,2,8,3,4,7,9,6,5,2,5,0,1,3]
},{
    grid: 4,
    items: [7,1,11,4,9,6,8,0,10,10,11,2,8,3,4,7,9,6,5,2,5,0,1,3]
}];