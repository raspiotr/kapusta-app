import { Link } from "react-router-dom";
import Balance from "../../components/Balance/Balance";
import Calendar from "../../components/Calendar/Calendar";
import scss from "./Home.module.scss";
import { useState } from "react";
import Container from "../../components/Container/Container";
import Input from "../../components/Inputs/Input";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
          <button onClick={openModalBtn}>← TO TRANSACTION</button>
        </div>
        <div className={scss.balance}>
          {isMobile ? (
            <>
              <div>
                <Link to="/reports">Reports 📊</Link>
              </div>
              <Balance />{" "}
            </>
          ) : (
            <>
              <Balance />{" "}
              <div>
                <Link to="/reports">Reports 📊</Link>
              </div>
            </>
          )}
        </div>
        {isMobile ? (
          <>
            <Calendar />
            <Input isOpen={isOpen} closeModal={openModalBtn} />
          </>
        ) : (
          <div className={scss.mainWindow}>
            <div className={scss.upWindow}>
              <Calendar />
              <Input isOpen={isOpen} closeModal={openModalBtn} />
            </div>
          </div>
        )}

        <>
          {isMobile ? (
            <div className={scss.bottomButtons}>
              <button
                className={`${scss.button} ${isActive ? "" : scss.active}`}
                style={
                  isActive
                    ? { backgroundColor: "darkorange", color: "white" }
                    : {}
                }
                onClick={!isActive ? handleClick : null}
              >
                EXPENSES
              </button>
              <button
                className={`${scss.button} ${!isActive ? "" : scss.active}`}
                style={
                  !isActive
                    ? { backgroundColor: "darkorange", color: "white" }
                    : {}
                }
                onClick={isActive ? handleClick : null}
              >
                INCOME
              </button>
            </div>
          ) : (
            ""
          )}
        </>
      </main>
    </Container>
  );
};
export default Home;
