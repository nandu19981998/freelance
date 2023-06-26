import React from 'react';
import styles from './index.module.scss';

const TextField = ({placeholder, label, name, errorStatus, ...rest}) => {
    return <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>{label}</label>
        <input {...rest} name={name} placeholder={placeholder} type="text"/>
        {errorStatus.error && <span>{errorStatus.errorMessage}</span>}
    </div>
};

export default TextField;