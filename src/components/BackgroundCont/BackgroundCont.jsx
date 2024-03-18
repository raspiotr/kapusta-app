import cabbageGroupImage from "../../images/desktop/kapusta.png";

import styles from "./BackgroundCont.module.scss";

const { StyledContainer, StyledImage } = styles;

const BackgroundCont = () => {
  return (
    <div className={StyledContainer}>
      <img className={StyledImage} src={cabbageGroupImage} alt="Cabbages" />
    </div>
  );
};

export default BackgroundCont;
