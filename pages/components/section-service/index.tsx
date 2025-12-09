import styles from "styles/section/SectionService.module.css";
import Footer from "../footer";
import SectionDepoiments from "../section-depoiment";
import AnimationCar from "../animation-car";
import Nav from "../nav";
import Link from "next/link";

const SectionService = () => {
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
      <AnimationCar />

      <div className={styles.divUl}>
        <ul className={styles.ul}>
          <li>
            <img
              src="/logistics-tracking/segurança.png"
              alt="seguranaça veicular"
            />
            <span>Mais Segurança</span>
          </li>
          <li>
            <img
              src="/logistics-tracking/tranquilidade.png"
              alt="seguranaça veicular"
            />
            <span>Mais Tranquilidade</span>
          </li>
          <li>
            <img
              src="/logistics-tracking/monitorar.png"
              alt="seguranaça veicular"
            />
            <span>Monitore seu veículo em tempo real 24 horas por dia</span>
          </li>
          <li>
            <img
              src="/logistics-tracking/velocidade.png"
              alt="seguranaça veicular"
            />
            <span>Controle de Velocidade</span>
          </li>
          <li>
            <img
              src="/logistics-tracking/acesso.png"
              alt="seguranaça veicular"
            />
            <span>Acesso 24 horas pelo APP</span>
          </li>{" "}
          <li>
            <img
              src="/logistics-tracking/historico.png"
              alt="seguranaça veicular"
            />
            <span>Histórico de Rotas</span>
          </li>
          <li>
            <img
              src="/logistics-tracking/qualidade.png"
              alt="seguranaça veicular"
            />
            <span>Serviço de Qualidade</span>
          </li>
        </ul>
      </div>

      <ul className={styles.ul2}>
        <li>
          <img
            src="/logistics-tracking/homologado.png"
            alt="seguranaça veicular"
          />
          <div className={styles.divText}>
            <span>RASTREADORES HOMOLOGADOS PELA ANATEL</span>
          </div>
        </li>
        <li>
          <img src="/logistics-tracking/casa.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>VAMOS ATÉ SUA CASA</span>
          </div>
        </li>
        <li>
          <img src="/logistics-tracking/cartao.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>ACEITAMOS PARCELAMENTO NO CARTÃO</span>
          </div>
        </li>
        <li>
          <img src="/logistics-tracking/duvida.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>PARA MAIS INFORMAÇÕES ENTRE EM CONTATO CONOSCO</span>
          </div>
        </li>
      </ul>
      <SectionDepoiments />
      <Footer />
    </section>
  );
};

export default SectionService;
