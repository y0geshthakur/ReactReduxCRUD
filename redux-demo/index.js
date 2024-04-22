const redux = require('redux')
const createStore = redux.legacy_createStore

console.log('From index.js');

const BUY_CAKE="BUY_CAKE";
const BUY_ICE_CREAM="BUY_ICE_CREAM";

//action creator
function buyCake()
{
    //action
    return{
        type:BUY_CAKE,
        info:'First Redux action'
    }
}
function buyIceCream()
{
    return{
        type:BUY_ICE_CREAM,
        info:'Second Redux action'
    }
}
const initialCakeState = {
    numofCakes :10

}
const initialIceCreamState = {
    numofIceCream :20
}
// create reducer
const cakereducer = (state = initialCakeState,action )=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes: state.numofCakes-1
        }
        default: return state
    }
}
const icecreamreducer = (state = initialIceCreamState,action )=>{
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numofIceCream: state.numofIceCream-1
        }
        default: return state
    }
}
//subscribe store and dispatch action
const rootReducer = redux.combineReducers({
    cake: cakereducer,
    icecream : icecreamreducer
})
const store=createStore(rootReducer);
console.log('Initial State',store.getState());


store.subscribe(()=>console.log('updated state',store.getState()));

store.dispatch(buyCake());
store.dispatch(buyIceCream());