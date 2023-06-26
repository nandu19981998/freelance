import React, {useEffect, useState} from 'react'
import styles from './index.module.scss'
import UserTile from '../components/UserTile'
import axios from 'axios'
import MegaLoader from '../components/MegaLoader'

const Dashboard = () => {

  const [candidates, setCandidates] = useState(null); 
  useEffect(() => {
    async function getCandidates() {
        const response = await axios.get('/api/user');
        setCandidates(response.data.data)
    };
    getCandidates();
  }, []);

  return <main className={styles.mainContainer}>
            <h2>Candidate Profiles</h2>
            {candidates ?<div className={styles.tileContainer}>
              {candidates.map((user, index) => (
                <UserTile key={index+user?.name} userDetails={user} />
              ))}
              <UserTile create/>
            </div>:<MegaLoader />}
         </main>

};

export default Dashboard;