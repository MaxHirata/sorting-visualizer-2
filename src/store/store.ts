import { createStore , combineReducers ,applyMiddleware, compose}  from 'redux';
import reducer from './reducers/reducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './actions/actionTypes';

//const middleware = [thunk];

export const rootReducer = combineReducers({
    userActions: reducer
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,  
    compose(
        applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;