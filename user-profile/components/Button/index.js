import React from 'react';
import styles from './index.module.scss';

const Button = ({children, ...rest}) => {
    return <button {...rest} className={styles.buttonContainer}>
                {children}
           </button>
};

export default Button;