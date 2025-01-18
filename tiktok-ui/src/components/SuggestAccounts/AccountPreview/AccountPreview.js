import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src="https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-1/473133005_122102285384720961_2118994776920491627_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGduerVVJBCtK-S0cOuOCzeZUgCxgLQ6TVlSALGAtDpNUArCHVUOPO3YXd8SvU911Z2nTtkK7pnyBUwjIO_pbZY&_nc_ohc=w2iqWl15pbwQ7kNvgHK_xR-&_nc_oc=Adj0QhAp7apR23Bfxz2ODqVDM0x-lXsoXH6Wy7MmmsSa-WhxWekSF7z-a1tKSwVcvDE&_nc_zt=24&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=A8ICxNfYHxr9B8rBmK1gLgv&oh=00_AYC5N8sL26YXrpwe-yRLg6cTelLLpJoEBMiPHZshJjMLlQ&oe=679103D6" 
                    alt="" 
                />
                    <Button className={cx('follow-btn')} primary>follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>n..linh_06</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Linh Linh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
     );
}

export default AccountPreview;