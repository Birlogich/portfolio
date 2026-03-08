import ivanphoto from "../../../assets/img/ivanphoto.jpg";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        IT Support Engineer with a focus on networking and system
        administration.
      </p>
      <img src={ivanphoto} alt="myphoto" />
    </div>
  );
};
