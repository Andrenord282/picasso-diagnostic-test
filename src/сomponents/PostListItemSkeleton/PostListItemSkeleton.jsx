import classNames from "classnames";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './PostListItemSkeleton.css';

const PostListItemSkeleton = (props) => {
    const { count, inheritClass } = props;

    const postSkeletonClasses = classNames(inheritClass, 'post-list-item',);

    return Array(count)
        .fill('PostSkeleton')
        .map((_, index) => {
            return (
                <SkeletonTheme key={index} baseColor="#1e252b" highlightColor="#262d34">
                    <div className={postSkeletonClasses}>
                        <div className="post-item-skeleton__title">
                            <Skeleton width='100%' height="100%" />
                        </div>
                        <div className="post-item-skeleton__text">
                            <Skeleton width='100%' height="100%" />
                        </div>
                        <div className="post-item-skeleton__auhtor">
                            <Skeleton width='100%' height="100%" />
                        </div>
                    </div>
                </SkeletonTheme>
            );
        });
};

export { PostListItemSkeleton };