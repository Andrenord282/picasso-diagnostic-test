import { useEffect } from "react";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import { useSelector } from "react-redux";
import { selectPostsLoaded, } from "./model/postListSlice";
import { selectPostsRequest } from "./model/postListSlice";
import { selectCursor } from "./model/postListSlice";
import { selectLimit } from "./model/postListSlice";
import { selectPosts } from "./model/postListSlice";
import { selectFilter, } from "./model/postListSlice";

import { usePostListController } from "./controller/usePostListController";

import { PostListItemSkeleton } from "сomponents/PostListItemSkeleton";
import { PostListItem } from "entities/PostListItem";
import { SelectByAuthor } from "./сomponents/SelectByAuthor";

import './PostList.css';

const PostList = () => {
    const postsLoaded = useSelector(selectPostsLoaded);
    const postsRequest = useSelector(selectPostsRequest);
    const cursor = useSelector(selectCursor);
    const limit = useSelector(selectLimit);
    const posts = useSelector(selectPosts);
    const filter = useSelector(selectFilter);
    const postListController = usePostListController();

    const targetUpdateRef = useIntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !postsRequest && cursor < 121) {
                postListController.setTogglePostsRequest();
            }
        });
    }, { threshold: 0.5 });


    useEffect(() => {
        if (!postsLoaded) {
            postListController.initPostList(cursor, limit, filter);
        }

    }, [postsLoaded, postListController, cursor, limit, filter]);

    useEffect(() => {
        if (postsRequest) {
            postListController.updatePostList(cursor, limit, filter);
        }

    }, [postsRequest, postListController, cursor, limit, filter]);


    return (
        <div className="post-list">
            <SelectByAuthor inheritClass='post-list__select' />
            {posts && posts.length > 1 && posts.map((post, index) => {
                const postNumber = index + 1;
                switch (true) {
                    case postNumber === posts.length - 2:
                        return <div key={post.id}>
                            <span ref={targetUpdateRef}></span>
                            <PostListItem key={post.id} inheritClass='post-list__item' postData={post} />;
                        </div>;

                    default:
                        return <PostListItem key={post.id} inheritClass='post-list__item' postData={post} />;
                }

            })}
            {postsRequest && <PostListItemSkeleton count={10} inheritClass='post-list__item' />}
            {!postsLoaded && <PostListItemSkeleton count={10} inheritClass='post-list__item' />}
        </div>
    );
};

export { PostList };