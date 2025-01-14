import classNames  from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisVertical, 
    faEarthAsia, 
    faCircleQuestion, 
    faKeyboard, 
    faCoins,
    faUser,
    faGear,
    faArrowRightFromBracket,  
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import Image from '~/components/Images';
import Button from '~/components/Button';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import config  from '~/config';


const cx = classNames.bind(styles)  

function Header() {
    // const currentUser = false;
    const currentUser = true;
    
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            // subMenu level 2
            children: {
                title: 'Language',
                // Show Languages 
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English'
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Viet Nam',

                        // if we've menu level 2
                        // children: {...}
                    },
                ]
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: './feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        }
    ];
    
    // handle logic
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@/dunz1610'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: './settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: './logout',
            separate: true, // separate line
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok"/>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {/** Show user - login and not login */}
                    {currentUser ? (
                        <>
                            <div>
                                <button className={cx('upload-btn')}>
                                    <UploadIcon className={cx('upload-icon')} />
                                    <span className={cx('upload-text')}>Upload</span>
                                </button>
                            </div>
                            
                            <Tippy delay={[0, 200]} content="Inbox" placement='bottom'>
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            
                        </>
                    ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                        )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')} 
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5b0d5f71405f0d8e4d545cba13c6dff7.jpeg?lk3s=a5d48078&nonce=57800&refresh_token=f28f792b896ae3ec1dc1c05420419fe5&x-expires=1736132400&x-signature=NIhVC1EMXvMFq%2B%2Bpchv1RSG0mOk%3D&shp=a5d48078&shcp=81f88b70" 
                                alt='Chau Ngan'   
                                fallback="https://th.bing.com/th/id/OIP.NFNT-QQ3zPiy0JCZKInAqAHaJb?rs=1&pid=ImgDetMain"                             
                            /> 
                            
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;