import apiServer from 'services/axios/client';

class PostListService {
    getPosts = async (cursor, limit, filter) => {
        try {
            let queryString = '';

            if (Object.keys(filter).length > 0) {
                for (const name in filter) {
                    const value = filter[name];
                    queryString = `${queryString}&${name}=${value}`;
                }
            }

            const response = await apiServer.get(
                `posts?_start=${cursor}&_limit=${limit}${queryString}`,
            );
            return response;
        } catch (error) {
            return error.response;
        }
    };

    getAuthorList = async (userNameValue) => {
        try {
            const response = await apiServer.get(`users?username_like=${userNameValue}`);
            return response;
        } catch (error) {
            return error.response;
        }
    };
}

const postListService = new PostListService();

export { postListService };
