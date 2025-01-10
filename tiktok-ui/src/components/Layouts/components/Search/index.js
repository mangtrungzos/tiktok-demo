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
import * as searchServices from '~/apiServices/searchServices';

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

        // await finish -> run setSearchResult & setLoading
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        }

        fetchApi();

    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
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
                    onChange={handleChange}
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
                
                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;