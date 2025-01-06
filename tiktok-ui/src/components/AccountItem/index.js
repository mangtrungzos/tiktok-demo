import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import Image from '~/components/Images';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return  (
        <div className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5b0d5f71405f0d8e4d545cba13c6dff7.jpeg?lk3s=a5d48078&nonce=57471&refresh_token=912fb922bcd5262d5d3d1cf403fe7a6b&x-expires=1735729200&x-signature=frK372XQDeK6jpU6nt4%2B7vyKMr8%3D&shp=a5d48078&shcp=81f88b70' 
                alt='Quynh Pham'
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Quynh pham</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4> 
                <span className={cx('username')}>Quynh Pham</span>
            </div>
        </div>
    )
}

export default AccountItem