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

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2])
        }, 0)
    }, []);

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
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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
                {!!searchValue && (
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
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;