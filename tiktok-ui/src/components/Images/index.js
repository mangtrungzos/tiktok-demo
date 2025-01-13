import PropTypes from 'prop-types';
import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, fallback = images.noImage, className, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img 
            className={classNames(styles.wrapper, className)}
            ref={ref} 
            src={_fallback || src}   
            alt={alt} 
            onError={handleError} 
            loading="lazy"
            {...props} 
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
}

export default Image;

// If we don't pass url for fallback, we will use fallback = images.noImage
// If we passed url for fallback, we would use the passed fallback url 