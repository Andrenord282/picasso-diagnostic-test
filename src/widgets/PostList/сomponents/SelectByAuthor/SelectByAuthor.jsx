import classNames from "classnames";
import { postListService } from '../../api/postListService';
import { useInputChange } from "hooks/useInputChange";
import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from 'react';

import { usePostListController } from "../../controller/usePostListController";

import './SelectByAuthor.css';

const SelectByAuthor = (props) => {
    const { inheritClass } = props;
    const inputSearchAuthor = useInputChange('');
    const [selectAutohr, setSelectAuthor] = useState('');
    const [undefinedAutohr, setUndefinedAutohr] = useState(false);
    const [authorList, setAuthorList] = useState([]);
    const debounceSearchAuthor = useDebounce(postListService.getAuthorList, 500);
    const postListController = usePostListController();
    const selectByAuthorClasses = classNames(inheritClass, 'select-by-author');

    const handlerAddFilterAuthor = (e) => {
        const self = e.target;
        if (self.closest('.select-by-author__search-list-item')) {
            const nameVlue = self.closest('.select-by-author__search-list-item').textContent;
            const authorId = self.closest('.select-by-author__search-list-item').dataset.authorId;
            postListController.setFilter({
                filterName: 'userId',
                filterValue: authorId
            });
            setSelectAuthor(nameVlue);
            inputSearchAuthor.onReset();
            setAuthorList([]);
        }
    };

    const handlerInputSearchAuthor = (e) => {
        inputSearchAuthor.onChenge(e);
        if (e.target.value) {
            debounceSearchAuthor(e.target.value)
                .then((response) => {
                    if (response.data.length > 1) {
                        setAuthorList(response.data);
                    } else {
                        setUndefinedAutohr(true);
                    }
                });
        }
        if (!e.target.value) {
            setAuthorList([]);
            setUndefinedAutohr(false);
        }
    };

    return (
        <div className={selectByAuthorClasses}>
            <div className="select-by-author__input-body">
                <label htmlFor="" className="select-by-author__label"> Поиск по автору: </label>
                <input type="text"
                    className="select-by-author__input"
                    placeholder='Введите имя автора'
                    onChange={(e) => {
                        handlerInputSearchAuthor(e);
                    }} value={inputSearchAuthor.value} />
                {authorList && authorList.length > 0 &&
                    <div className="select-by-author__search-list">

                        {authorList.map((author) => {
                            return <button className="select-by-author__search-list-item"
                                data-author-id={author.id}
                                key={author.id}
                                onClick={(e) => { handlerAddFilterAuthor(e); }}>
                                {author.username}
                            </button>;
                        })}
                    </div>
                }
                {undefinedAutohr && <div className='select-by-author__search-list'><span className='select-by-author__search-list-item'>Пользователь не найден</span></div>}
            </div>
            {selectAutohr && <div className="select-by-author__select-author">
                Выбранный автор: <span>{selectAutohr}</span>
            </div>}
        </div>
    );
};

export { SelectByAuthor };