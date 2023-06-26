import React, {useEffect, useState} from 'react'
import styles from './index.module.scss'
import UserTile from '../components/UserTile'
import axios from 'axios'

const Dashboard = () => {

  const [candidates, setCandidates] = useState([]); 
  useEffect(() => {
    async function getCandidates() {
        const response = await axios.get('/api/user');
        console.log(response.data.data)
        setCandidates(response.data.data)
    };
    getCandidates();
  }, []);

  return <main className={styles.mainContainer}>
            <h2>Candidate Profiles</h2>
            <div className={styles.tileContainer}>
              {candidates.map((user, index) => (
                <UserTile key={index+user?.name} userDetails={user} />
              ))}
              <UserTile create/>
            </div>
         </main>

};

export default Dashboard;