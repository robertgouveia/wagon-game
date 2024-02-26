const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const play = (state = initialWagonState, action) => {
  switch(action.type){
    case 'gather':{
      return {...state, supplies: state.supplies + 15, days: state.days + 1}
    }
    case 'travel':{
      let newState = {...state, supplies: state.supplies - 20 * action.payload, distance: state.distance + 10, days: state.days + action.payload}
      if(newState.supplies < 0){
        return state
      }
      else {
        return newState
      }
    }
    case 'tippedWagon':{
      return {...state, supplies: state.supplies - 30, days: state.days + 1}
    }
    default:{
      return state;
    }
  }
}

let wagon = play(undefined, { type: 'travel', payload: 1})
wagon = play(wagon, {type: 'gather'})
wagon = play(wagon, {type: 'tippedWagon'})
wagon = play(wagon, {type: 'travel', payload: 3})
wagon = play(wagon, {type: 'travel', payload: 3})
console.log(wagon)
