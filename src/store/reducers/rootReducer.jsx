import authReducer from "./authReducer";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {combineReducers} from "redux"
import storage from "redux-persist/lib/storage"


const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn","token"],
};

const rootReducer = combineReducers({
    auth:persistReducer(authConfig,authReducer)
})

export default rootReducer;
