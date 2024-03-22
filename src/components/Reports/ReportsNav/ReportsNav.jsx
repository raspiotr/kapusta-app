import { Link } from "react-router-dom";
import { Periods } from "./Periods/Periods";
import { useMediaQuery } from "react-responsive";
import styles from "./ReportsNav.module.scss";
import arrow from "../../../images/SVG/arrow.svg";
import { Balance } from "../../Balance/Balance";

const ReportsNav = ({ balance }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const balanceBox = (
    <>
      <div className={styles.balance}>
        <p className={styles.title}>Balance:</p>
        <div className={styles.amount}>
          {balance}
          <span>UTH</span>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.box}>
      <Link to="/">
        <img src={arrow} alt="" />
        {!isMobile && <span className={styles.text}>Main page</span>}
      </Link>
      <>
        {isMobile ? (
          <>
            <Periods />
            {balanceBox}
          </>
        ) : (
          <>
            {isDesktop ? <Balance /> : balanceBox}
            <Periods />
          </>
        )}
      </>
    </div>
  );
};
export default ReportsNav;
