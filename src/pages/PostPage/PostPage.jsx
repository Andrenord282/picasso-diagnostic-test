
import { useParams } from "react-router-dom";

import { Post } from "widgets/Post";

import '../page-default.css';

const PostPage = () => {
    const { postId, userId } = useParams();

    return (
        <section className="page">
            <div className="page__container">
                <Post postId={postId} userId={userId} />
            </div>
        </section>
    );
};

export default PostPage;