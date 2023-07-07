import apiServer from 'services/axios/client';

class PostService {
    getPostData = async (postId, userId) => {
        try {
            const post = await apiServer.get(`posts?id=${postId}`);
            const author = await apiServer.get(`users?id=${userId}`);
            const comments = await apiServer.get(`comments?postId=${postId}`);

            return {
                post: post.data,
                author: author.data,
                comments: comments.data,
            };
        } catch (error) {
            return error.response;
        }
    };

    writeComment = async (data) => {
        try {
            await apiServer.post('comments', data);
        } catch (error) {
            return error.response;
        }
    };
}

const postService = new PostService();

export { postService };
