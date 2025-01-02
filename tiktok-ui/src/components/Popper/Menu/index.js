import Tippy from '@tippyjs/react/headless';
import classNames  from 'classnames/bind';
import styles from './Menu.module.scss';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItems from './MenuItems';   

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item}/>)
    }

    return ( 
        <Tippy
            interactive={true}
            delay={[0, 500]}
            // visible // show and hidden menu items
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;