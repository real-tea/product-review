import { applyMiddleware , combineReducers , createStore } from "redux";
import thunk from "redux-thunk";

import productReducer from "./reducers/productReducer"
import productRouteReducer from "./reducers/productRouteReducer"
import userReducer from "./reducers/userReducer"

import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : "root",
    storage,
}


const rootReducer = combineReducers({
    products : productReducer,
    routeProduct : productRouteReducer,
    user : userReducer
})

const persistedReducer = persistReducer(persistConfig , rootReducer);
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(persistedReducer , applyMiddleware(thunk));
export let persistor = persistStore(store);