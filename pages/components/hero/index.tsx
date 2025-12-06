import styles from "styles/hero/Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divText}>
        <p>
          A Aurum Logistics é referência em soluções de rastreamento veicular.
          Nosso crescimento constante é reflexo de um trabalho pautado na
          seriedade e na excelência. Estamos comprometidos em entregar a melhor
          tecnologia e suporte para quem busca segurança e controle total do seu
          veículo.
        </p>
      </div>
    </section>
  );
};
export default Hero;
