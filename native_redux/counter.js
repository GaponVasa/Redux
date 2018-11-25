'use strict';

let buttons = document.querySelectorAll('.btn');
let incrementButton = buttons[0];
let decrementButton = buttons[1];
let elementResult = document.getElementById('result');

//Reducer
function updateState(state, action){
  if(action.type === 'INCREMENT'){
    return {count: state.count + action.amount};
  }else if(action.type === 'DECREMENT'){
    return {count: state.count - action.amount};
  }else{
    return state;
  }
}
//store
class Store{
  constructor(updateState, state){
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  get state(){
    return this._state;
  }

  update(action){
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback){
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(cd => cd !== callback);
  }
}

const initalState = {count: 0};

const store = new Store(updateState, initalState);

//action
const incrementAction = {type: 'INCREMENT', amount: 1};
const decrementAction = {type: 'DECREMENT', amount: 1};

const showResult = ()=>{
  const state = store.state.count;
  console.log('State.changed', store.state.count);
  elementResult.innerHTML = state;
}
const unsubscribe = store.subscribe(()=>showResult());

incrementButton.addEventListener('click',()=>store.update(incrementAction));
decrementButton.addEventListener('click', ()=>store.update(decrementAction));

