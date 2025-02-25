import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ 
    to,
    href,
    primary = false,
    text = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    children,
    className,
    onClick,
    leftIcon,
    ...passProps 
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    // Remove event listener when btn is disabled
    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if(to) {
        props.to = to;
        Comp = Link;
    } else if(href) {
        props.href = href;
        Comp = 'a';
    }

    
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        outline,
        small,
        large,
        disabled,
        rounded,
    });  

    return  (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool, 
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool, 
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node, // for icon .node
    onClick: PropTypes.func,
};

export default Button;