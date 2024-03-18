import { Link } from "react-router-dom";
import Balance from '../../Balance/Balance'
import {Periods} from './Periods/Periods'
import styles from './ReportsNav.module.scss';

  const ReportsNav = () => {
  return (
    <main className={styles.mainContainer}>
    <div className={styles.box}>
      <Link to="/">Go back</Link>
      <div className={styles.box}>
        <Periods/>
      <Balance></Balance>
      </div>
      </div>
      </main>
  );
};
export default ReportsNav
