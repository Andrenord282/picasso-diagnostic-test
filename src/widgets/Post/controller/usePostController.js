import { postService } from '../api/postService';
import { postActions } from '../model/postSlice';

import { useDispatch } from 'react-redux';

const usePostController = () => {
    const dispatch = useDispatch();

    const getPostData = async (postLoaded, postId, userId) => {
        if (postLoaded) {
            dispatch(postActions.resetPost());
        }
        const postData = await postService.getPostData(postId, userId);
        dispatch(postActions.initPost(postData));
    };

    const writeComment = async (postLoaded, data) => {
        if (postLoaded) {
            dispatch(postActions.resetPost());
        }
        await postService.writeComment(data);
    };

    return {
        getPostData,
        writeComment,
    };
};

export { usePostController };
