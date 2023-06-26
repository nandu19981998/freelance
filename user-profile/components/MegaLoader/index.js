import React from 'react';
import styles from './index.module.scss';

const MegaLoader = () => {
    return <div className={styles.loader}>
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
};

export default MegaLoader;