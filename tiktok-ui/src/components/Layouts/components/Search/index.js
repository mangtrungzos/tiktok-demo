import { useRef, useState, useEffect } from 'react';
import {
    faCircleXmark, 
    faSpinner, 
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import classNames  from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { UseDebounce } from '~/hooks';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // When user stops typing about 500 miliseconds, debounce value will be updated with searchValue new value
    const debounced = UseDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if(!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false);

            })
            .catch(() => {
                setLoading(false);
            })
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return ( 
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            offset={[11, 8]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and videos'
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                
                {/* Logic button clear */}
                {!!searchValue && !loading && (
                    <button 
                        className={cx('clear')} 
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;