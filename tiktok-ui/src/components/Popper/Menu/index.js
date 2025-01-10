import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames  from 'classnames/bind';

import styles from './Menu.module.scss';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItems from './MenuItems';   
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange=defaultFn }) {
    // Mindset - at the first time we render the items, the first page is just the first element of an array 
    // 1. Render list of items = [] - We have to pass in the useState as object
    // 2. Object will represent the data of the current data

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        // current: the last element - data: items - .data: Will get the items
        return current.data.map((item, index) => {
            // children : is children: {...} /Header - Not have children_return undefined

            // Always guaranteed to be a value Boolean (true or false) - If it have children, it will be true or not
            const isParent = !!item.children;
            return (
                <MenuItems 
                    key={index} 
                    data={item} 
                    onClick={() => {
                        if (isParent) {
                            // console.log(item.children)
                            // Push add to array to be able to return the first page - level 1 menu - prev: previous history state
                            setHistory(prev => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, history.length - 1));
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <span className={cx('menu-arrow')}></span>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>
                    {renderItems()}
                </div>
            </PopperWrapper>
        </div>
    )

    const handleReset = () => {
        setHistory(prev => prev.slice(0, 1));
    }

    return ( 
        <Tippy
            interactive={true}
            delay={[0, 500]}
            // visible // show and hidden menu items
            placement='bottom-end'
            offset={[11, 9]} // reposition the menu list
            hideOnClick={hideOnClick}
            render={renderResult}
            // Hide menu 
            onHide={handleReset}
        >
            {children}
        </Tippy>
     );
}

export default Menu;