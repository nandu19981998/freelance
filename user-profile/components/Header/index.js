import React from 'react';
import styles from "./index.module.scss";
import Search from '../Search'
import {useRouter} from 'next/router'

const Header = () => {

    const router = useRouter();

    return <header className={styles.header}>
                <div className={styles.demoContainer}>
                    <img src='/Vector.svg' alt="Demo Image" onClick={() => {router.push('/')}}/>
                    <h2>Demo</h2>
                </div>
                <div className={styles.searchContainer}>
                    <Search placeholder="Type to search" />
                </div>
                <div className={styles.accountContainer}>
                    <div className={styles.mail}>
                        <img src="/mail.svg"/>
                        <span>5</span>
                    </div>
                    <img src="/bell.svg"/>
                    <img src="/Ellipse 6.svg"/>
                </div>
           </header>
};

export default Header;