import { Link } from "react-router-dom";
import Balance from "../../components/Balance/Balance";
import Buttons from "../../components/Buttons/Buttons";
import Calendar from "../../components/Calendar/Calendar";
import scss from "./Home.module.scss";
import { useState } from "react";
import Container from "../../components/Container/Container";
import Input from "../../components/Inputs/Input";
import { useMediaQuery } from "react-responsive";
import Transaction from "../../components/Transaction/Transaction";
import Table from "../../components/Table/Table";
import Summary from "../../components/Summary/Summary";

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const openModalBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <main className={scss.mainContainer}>
        <div className={scss.transactionBtn}>
          <button onClick={openModalBtn}> +- TO TRANSACTION</button>
        </div>
        <div className={scss.balance}>
          {isMobile ? (
            <>
              <div>
                <Link to="/reports">Reports 📊</Link>
              </div>
              <Balance />
            </>
          ) : (
            <>
              <Balance />
              <div>
                <Link to="/reports">Reports 📊</Link>
              </div>
            </>
          )}
        </div>
        {!isMobile && <Buttons isActive={isActive} handleClick={handleClick} />}
        {isMobile ? (
          <>
            <Calendar />
            <Input isOpen={isOpen} closeModal={openModalBtn} />
            <Table />
          </>
        ) : (
          <>
            <div className={scss.mainWindow}>
              <div className={scss.upWindow}>
                <Calendar />
                <Transaction />
              </div>
              <div className={scss.bottomWindow}>
                <Table />
                {isDesktop && <Summary />}
              </div>
            </div>
            {!isDesktop && <Summary />}
          </>
        )}
        {isMobile && <Buttons isActive={isActive} handleClick={handleClick} />}
      </main>
    </Container>
  );
};
export default Home;
