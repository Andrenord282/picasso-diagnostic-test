import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectPostAuthor, } from './model/postSlice';
import { selectPostComents, } from './model/postSlice';
import { selectPostContent, } from './model/postSlice';
import { selectPostLoaded } from './model/postSlice';

import { usePostController } from './controller/usePostController';

import { PostSkeleton } from "сomponents/PostSkeleton";
import { CommentCreator } from "./сomponents/CommentCreator";

import './Post.css';


const Post = (props) => {
    const { postId, userId } = props;
    const postLoaded = useSelector(selectPostLoaded);
    const postContent = useSelector(selectPostContent);
    const postAuthor = useSelector(selectPostAuthor);
    const postComments = useSelector(selectPostComents);
    const postController = usePostController();

    useEffect(() => {
        if (!postLoaded) {
            postController.getPostData(postLoaded, postId, userId);
        }
    }, [postLoaded]);

    return (
        <>
            {postLoaded && <div className='post'>
                <div className="post__body">
                    {postAuthor && <div className="post__author-info">
                        {postAuthor.map((author) => {
                            return <>
                                <span className='post__author-info-item'>
                                    Автор: {author.username}
                                </span>
                                <a className='post__author-info-item'
                                    href={`tel:+:${author.phone}`}
                                > Телефон: {author.phone}
                                </a>
                                <a className='post__author-info-item'
                                    href={`mailto:${author.email}`}
                                > Почта: {author.email}
                                </a>
                            </>;
                        })}
                    </div>
                    }
                    {postContent && <div className='post__content'>
                        {postContent.map((content) => {
                            return <>
                                <h2 className='post__content-title'

                                >  {content.title}
                                </h2 >
                                <p className='post__content-textu'>
                                    {content.body}
                                </p>
                            </>;
                        })}
                    </div>}
                    {postComments && postComments.length > 0 && <div className='post__comments'>
                        <p className="post__comments-title">Комментарии:</p>
                        {postComments.map((comment) => {
                            return <div className='post__comment' key={comment.id}>
                                <span className="post__comment-author">
                                    автор: {comment.name}
                                </span>
                                <p className="post__comment-text">
                                    {comment.body}
                                </p>
                            </div>;
                        })}
                    </div>}
                    <CommentCreator postLoaded={postLoaded} postId={postId} inheritClass='post__comment-creator' />
                </div>
            </div>}
            {!postLoaded && <PostSkeleton />}
        </>


    );

};

export { Post };


