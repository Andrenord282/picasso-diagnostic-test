import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postLoaded: false,
    postContent: [],
    postAuthor: [],
    poscComments: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetPost: (state, action) => {
            state.postLoaded = false;
            state.postContent = [];
            state.postAuthor = [];
            state.poscComments = [];
        },

        initPost: (state, action) => {
            const postData = action.payload;

            state.postLoaded = true;
            state.postContent = postData.post;
            state.postAuthor = postData.author;
            state.poscComments = postData.comments;
        },
    },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
