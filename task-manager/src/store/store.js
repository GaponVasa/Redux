import { createStore } from "redux";
import { tasks } from "../reducers/reducer";

const store = createStore(tasks);

export default store;
