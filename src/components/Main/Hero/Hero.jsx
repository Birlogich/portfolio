import ivanphoto from "../../../assets/img/ivanphoto.jpg";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Hi, I'm an IT Support Specialist 
        <br />
        & Backend Developer
        <br />
        focused on stability, performance
        and elegant problem-solving.
      </p>
      <img src={ivanphoto} alt="myphoto" />
    </div>
  );
};
