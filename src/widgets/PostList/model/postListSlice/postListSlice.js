import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsLoaded: false,
    postsRequest: false,
    posts: [],
    filter: {},
    sort: {},
    cursor: 1,
    limit: 10,
};

const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {
        initPosts: (state, action) => {
            const { posts } = action.payload;

            state.posts = posts;
        },

        setTogglePostsLoaded: (state, action) => {
            const { toggle } = action.payload;

            state.postsLoaded = toggle;
        },

        setTogglePostsRequest: (state, action) => {
            const { toggle } = action.payload;

            state.postsRequest = toggle;
        },

        reseteCursor: (state, action) => {
            const { value } = action.payload;

            state.cursor = value;
        },

        updateCursor: (state, action) => {
            const { value } = action.payload;

            state.cursor = state.cursor + value;
        },

        updatePosts: (state, action) => {
            const { posts } = action.payload;

            state.posts = [...state.posts, ...posts];
        },

        setFilter: (state, action) => {
            const { filterName, filterValue } = action.payload;

            state.filter[filterName] = filterValue;
        },
    },
});

export const postListActions = postListSlice.actions;
export const postListReducer = postListSlice.reducer;
