import { ReportsInfo } from '../../components/Reports/ReportsInfo/ReportsInfo';
import ReportsNav from '../../components/Reports/ReportsNav/ReportsNav'; 
import scss from './Reports.module.scss'
 const Reports = () =>  {
  return (
    <div className={scss.box}>
      <ReportsNav/>
      <ReportsInfo/>
    </div>
  );
};
export default Reports