import classNames from "classnames";
import { NavLink } from "react-router-dom";

import "./PostListItem.css";

const PostListItem = (props) => {
    const { postData, inheritClass } = props;

    const postListItemClasses = classNames(inheritClass, 'post-list-item');

    return (
        <div className={postListItemClasses}>
            <NavLink to={`/posts/${postData.id}/${postData.userId}`}>
                <h3 className="post-list-item__title">
                    {postData.title}
                </h3>
            </NavLink>
            <p className="post-list-item__text">
                {postData.body}
            </p>
            <span className="post-list__auhtor">
                автор id: {postData.userId}
            </span>
        </div>
    );
};

export { PostListItem };

