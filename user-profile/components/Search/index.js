import React from 'react';
import styles from './index.module.scss'

const Search = ({placeholder}) => {
    return <div className={styles.searchContainer}>
                <img className={styles.icon} src='/search.svg' alt="Search Icon" /> 
               <input className={styles.textField} placeholder={placeholder} type="text"/>
           </div>
};

export default Search;