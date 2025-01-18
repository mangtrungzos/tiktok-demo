import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import  AccountPreview  from './AccountPreview';


const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
                // visible={true}
                offset={[-25, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5ca757ba3d6d0014fce56deb8884ebb4.jpeg?lk3s=a5d48078&nonce=43359&refresh_token=c26eab6c12b048f0a70ef2732ea1a692&x-expires=1737252000&x-signature=nNHE3KuS6F3eWDzhWNZKvI5jJuw%3D&shp=a5d48078&shcp=81f88b70'
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>n..linh_06</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Linh Linh</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

AccountItem.propTypes = {};

export default AccountItem;