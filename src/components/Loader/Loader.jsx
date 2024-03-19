import { RotatingLines } from "react-loader-spinner";
import styles from "../Loader/Loader.module.scss";

export const Loader = () => (
  <div className={styles.Loader}>
    <RotatingLines
      stroke:$accentColor
      strokeWidth="5"
      width="120"
      animationDuration="0.75"
      visible={true}
    />
  </div>
);
