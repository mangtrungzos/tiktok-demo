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
                                src="https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-1/473133005_122102285384720961_2118994776920491627_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGduerVVJBCtK-S0cOuOCzeZUgCxgLQ6TVlSALGAtDpNUArCHVUOPO3YXd8SvU911Z2nTtkK7pnyBUwjIO_pbZY&_nc_ohc=w2iqWl15pbwQ7kNvgHK_xR-&_nc_oc=Adj0QhAp7apR23Bfxz2ODqVDM0x-lXsoXH6Wy7MmmsSa-WhxWekSF7z-a1tKSwVcvDE&_nc_zt=24&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=A7iDD67VTXUXL-H7cWZnRGZ&oh=00_AYDSohRVw5u4DEOwXJmaH7FmpvpURg6X4VMEX5PWp01D-Q&oe=678FB256" 
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