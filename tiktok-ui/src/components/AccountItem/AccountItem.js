import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import styles from './AccountItem.module.scss';
import Image from '~/components/Images';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return  (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {/* <span>Quynh pham</span> */}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </h4> 
                <span className={cx('username')}>{data.nickname}</span>
                {/* <span className={cx('username')}>Quynh Pham</span> */}
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem