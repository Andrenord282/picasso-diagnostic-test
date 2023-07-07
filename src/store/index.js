import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postListReducer } from 'widgets/PostList';
import { postReducer } from 'widgets/Post';

const rootReducer = combineReducers({
    postList: postListReducer,
    post: postReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
