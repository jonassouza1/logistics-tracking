import styles from "styles/section/SectionClient.module.css";
import Footer from "../footer";
import Nav from "../nav";
import Link from "next/link";

const SectionClient = () => {
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
      <div className={styles.divTitle}>
        <h2>ÁREA DO CLIENTE</h2>
      </div>

      <div className={styles.divLogo}>
        <img src="/logo.png" alt="" />
      </div>
      <h3>ACESSE SUA PLATAFORMA,</h3>
      <div className={styles.animatedtext}>
        <p>
          <span>c</span>
          <span>l</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>n</span>
          <span>d</span>
          <span>o</span>
        </p>
        <p>
          <span>n</span>
          <span>o</span>
          <span>s</span>
        </p>
        <p>
          <span>l</span>
          <span>i</span>
          <span>n</span>
          <span>k</span>
          <span>s</span>
        </p>
        <p>
          <span>a</span>
          <span>b</span>
          <span>a</span>
          <span>i</span>
          <span>x</span>
          <span>o</span>
        </p>
        <p>
          <span>p</span>
          <span>a</span>
          <span>r</span>
          <span>a</span>
        </p>
        <p>
          <span>f</span>
          <span>a</span>
          <span>z</span>
          <span>e</span>
          <span>r</span>
        </p>

        <p>
          <span>l</span>
          <span>o</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>.</span>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.divImg}>
          <div className={styles.arrow}></div>
          <Link href="#" target="_blank">
            <img src="/getrak.webp" alt="link do site getrak" />
            <p>Acesse AURUM</p>
          </Link>
        </div>
        <div className={styles.divImg}>
          <div className={styles.arrow}></div>
          <Link href="#" target="_blank">
            <img src="/fulltrack.webp" alt="link do site fulltrackapp" />
            <p>Acesse AURUM</p>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SectionClient;
