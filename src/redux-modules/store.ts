import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { IS_DEVELOPMENT, IS_PRODUCTION } from '../constants/environment';
import boardReducer from './board/boardSlice';

const rootReducer = combineReducers({
    board: boardReducer,
});

const reduxLogger = createLogger({
    duration: true,
    collapsed: true,
});

const middlewares = [...getDefaultMiddleware()];
if (IS_DEVELOPMENT) middlewares.push(reduxLogger);

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: !IS_PRODUCTION,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;