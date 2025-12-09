import styles from "styles/animation/animationCar.module.css";
const AnimationCar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divImg}>
        <img src="/logistics-tracking/logo1.png" alt="logo marca" />
      </div>

      <h1>Monitore</h1>
      <p>SEU</p>
      <span className={styles.animatedsubtitle}>
        <img
          className={styles.ponteiro}
          src="/logistics-tracking/ponteiro.png"
          alt="ponteiro de localização"
        />
        <img
          className={styles.car}
          src="/logistics-tracking/car.png"
          alt="veiculo"
        />
      </span>
      <h2>Com</h2>
      <div className={styles.animatedheader}>
        <span className={styles.t}>A</span>
        <span>U</span>
        <span className={styles.a}>R</span>
        <span>U</span>
        <span>M</span>
      </div>
    </section>
  );
};
export default AnimationCar;
