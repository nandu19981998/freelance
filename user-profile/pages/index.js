import React, {useEffect, useState} from 'react'
import styles from './index.module.scss'
import UserTile from '../components/UserTile'
import mockData from '../mock.json';
import axios from 'axios'

const Dashboard = () => {

  // const [candidates, setCandidates] = useState([]); 
  // useEffect(() => {
  //   async function getCandidates() {
  //       const {data} = await axios.get('/api/user');
  //       setCandidates(data)
  //   };
  //   getCandidates();
  // }, []);

  return <main className={styles.mainContainer}>
            <h2>Candidate Profiles</h2>
            <div className={styles.tileContainer}>
              {mockData.map((user, index) => (
                <UserTile key={index+user?.name} userDetails={user} />
              ))}
              <UserTile create/>
            </div>
         </main>

};

export default Dashboard;