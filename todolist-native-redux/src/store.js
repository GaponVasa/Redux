import createStore from './redux.js';
import reducer from './reducer';

const initalState = { cards: [{ id: 0, text: 'Learn React' }] };

const store = createStore(reducer, initalState);

export default store;