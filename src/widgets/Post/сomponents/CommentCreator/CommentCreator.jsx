import classNames from "classnames";

import { useRef } from "react";
import { useAutosizeTextArea } from "hooks/useAutosizeTextArea";
import { useInputChange } from "hooks/useInputChange";
import { usePostController } from '../../controller/usePostController';

import './CommentCreator.css';

const CommentCreator = (props) => {
    const { inheritClass, postLoaded, postId } = props;
    const commentCreatorClasses = classNames(inheritClass, 'coment-creator');
    const usernameInput = useInputChange('');
    const textInput = useInputChange('');
    const textAreaRef = useRef(null);
    const postController = usePostController();
    useAutosizeTextArea(textAreaRef.current, textInput.value);

    const btnActiveClass = classNames('comment-creator__send', {
        active: usernameInput.value.length > 3 && textInput.value.length > 3
    });

    const handlerWriteComment = async () => {
        await postController.writeComment(postLoaded, { name: usernameInput.value, body: textInput.value, postId });
    };


    return (
        <div className={commentCreatorClasses}>
            <h4 className="comment-creator__title">
                Напишите комментарий
            </h4>
            <div className="comment-creator__input-body">
                <input type="text"
                    className="comment-creator__input comment-creator__input_name"
                    placeholder="введите username" onChange={usernameInput.onChenge} />
                <textarea ref={textAreaRef} type="text"
                    className="comment-creator__input comment-creator__input_text"
                    placeholder="введите комментарий" onChange={textInput.onChenge} />
                <button className={btnActiveClass} onClick={() => { handlerWriteComment(); }}>Оптправить</button>
            </div>
        </div>
    );
};

export { CommentCreator };