import React from 'react';
import styles from './index.module.scss';

const SelectInput = ({label,name, options, errorStatus, ...rest}) => {

    return <div className={styles.selectContainer}>
                <label>{label}</label>
                <select {...rest} name={name} className={styles.select}>
                    <option value="">Select an option</option>
                    {options.map((option) => <option value={option}>{option}</option>)}
                </select>
                {errorStatus.error && <span>{errorStatus.errorMessage}</span>}
          </div>
};

export default SelectInput;
