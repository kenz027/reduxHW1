import { createStore, combineReducers } from "redux";
import { serviceListReducer } from "../components/ServiceList";
import { serviceAddReducer } from "../components/ServiceAdd";
import { searchFormReducer } from "../components/SearchForm";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    searchForm: searchFormReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;