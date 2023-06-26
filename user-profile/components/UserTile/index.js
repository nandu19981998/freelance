import React from "react";
import styles from './index.module.scss';
import {useRouter} from 'next/router'

const UserTile = ({userDetails, create=false}) => {

    const router = useRouter();

    const {gender, name, email,age, country, city, phone} = userDetails || {};
    return !create ? <section className={styles.tileContainer}>
                    <div className={styles.imageContainer}>
                    {gender === "female" ? 
                    <img src='/Avatar.svg' alt="User Image"/> : <img src='/Avatar1.svg' alt="User Image"/>}
                    <div className={styles.detailsContainer}>
                        <h3>{name}</h3>
                        <p>{`Age : ${age}`}</p>
                        <p>{`Gender : ${gender}`}</p>
                    </div>
                </div>
                <p>
                    <img src="/location.svg"/>
                    <span>{`${city}, ${country}`}</span>
                </p>
                <p>
                    <img src="/sms.svg"/>
                    <span>{`${email}`}</span>
                </p>
                <p>
                    <img src="/call.svg"/>
                    <span>{phone}</span>
                </p>
           </section> : <div className={styles.createContainer} onClick={() => {router.push('/create')}}>
                            <p>Add User</p>
                            <img src='/Supporting text.svg'/>
                    </div>;
};

export default UserTile