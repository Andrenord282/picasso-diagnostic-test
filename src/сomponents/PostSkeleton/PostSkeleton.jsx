import classNames from "classnames";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './PostSkeleton.css';

const PostSkeleton = (props) => {
    const { inheritClass } = props;

    const postSkeletonClasses = classNames(inheritClass, 'post',);

    return (
        <SkeletonTheme baseColor="#1e252b" highlightColor="#262d34">
            <div className={postSkeletonClasses}>
                <div className="post-skeleton__author-info">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleton__content">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
                <div className="post-skeleto__comment">
                    <Skeleton width='100%' height="100%" />
                </div>
            </div>
        </SkeletonTheme>
    );
};

export { PostSkeleton };