import rootReducer from "../store/reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import {thunk} from "redux-thunk"

const reduxStore = () => {
    
    const store = createStore(rootReducer,applyMiddleware(thunk));
    const persistor = persistStore(store); 

    return {store,persistor};
}

export default reduxStore;