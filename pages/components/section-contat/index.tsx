import styles from "styles/section/SectionContat.module.css";
import Footer from "../footer";
import Nav from "../nav";
import Link from "next/link";

const SectionContat = () => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>
          <p>
            <i className="fa-solid fa-house-chimney"></i> ← Voltar ao Início
          </p>
        </Link>
      </div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h3>ENTRE EM CONTATO AGORA MESMO</h3>
          <h3>E</h3>
          <h4>PROTEJA-SE CONTRA ROUBO</h4>
        </div>

        <div className={styles.divImg}>
          <img src="/logistics-tracking/logo.png" alt="logo imagem" />
        </div>
      </div>

      <div className={styles.divMapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13865.411944121952!2d-51.06450785!3d-29.680544149999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519404c8f33fce5%3A0xb32874be45a1bbec!2sPosto%20Jacar%C3%A9%20(Shell)%20-%20Rede%20GASGAS!5e0!3m2!1spt-BR!2sbr!4v1765298474196!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.divText}>
        <h3> Acesse nossos canais de comunicação </h3>
        <h4>| |</h4>
        <div className={styles.arrow}></div>
      </div>

      <Footer />
    </section>
  );
};

export default SectionContat;
