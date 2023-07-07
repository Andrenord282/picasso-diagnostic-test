import { postListService } from '../api/postListService';
import { postListActions } from '../model/postListSlice';

import { useDispatch } from 'react-redux';

const usePostListController = () => {
    const dispatch = useDispatch();

    const initPostList = async (cursor, limit, filter) => {
        const postListInit = await postListService.getPosts(cursor, limit, filter);
        if (postListInit.status === 200) {
            dispatch(postListActions.initPosts({ posts: postListInit.data }));
            dispatch(postListActions.setTogglePostsLoaded({ toggle: true }));
            dispatch(postListActions.updateCursor({ value: limit }));
        }
    };

    const updatePostList = async (cursor, limit, filter) => {
        const postListUpdated = await postListService.getPosts(cursor, limit, filter);
        if (postListUpdated.status === 200) {
            dispatch(postListActions.updatePosts({ posts: postListUpdated.data }));
            dispatch(postListActions.setTogglePostsRequest({ toggle: false }));
            dispatch(postListActions.updateCursor({ value: limit }));
        }
    };

    const setTogglePostsRequest = () => {
        dispatch(postListActions.setTogglePostsRequest({ toggle: true }));
    };

    const setFilter = (filter) => {
        dispatch(postListActions.reseteCursor({ value: 1 }));
        dispatch(postListActions.setFilter({ ...filter }));
        dispatch(postListActions.setTogglePostsLoaded({ toggle: false }));
    };

    return {
        initPostList,
        updatePostList,
        setTogglePostsRequest,
        setFilter,
    };
};

export { usePostListController };
