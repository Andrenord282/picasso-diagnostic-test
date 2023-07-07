import { PostList } from "widgets/PostList";

import '../page-default.css';

const PostListPage = () => {
    return (
        <section className="page">
            <div className="page__container">
                <PostList />
            </div>
        </section>
    );
};

export default PostListPage;