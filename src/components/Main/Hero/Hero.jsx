import ivanphoto from "../../../assets/img/ivanphoto.jpg";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Hi, <br />
        I'm front end developer
        <br />
        who writes clean, elegant and efficient code
      </p>
      <img src={ivanphoto} alt="myphoto" />
    </div>
  );
};
