import Link from "next/link";
import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <Link
            href="https://api.whatsapp.com/send?phone=555196848538&text=Olá%20Gostaria%20de%20mais%20informações"
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "#63E6BE" }}
            ></i>
          </Link>
        </li>

        <li>
          <Link href="mailto:jonasforte@gmail.com" target="_blank">
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#ffffff" }}
            ></i>
          </Link>
        </li>
      </ul>

      <div className={styles.divAddress} id="contato">
        <small>
          Aurum Logistics - CNPJ: 00.000.000/0000-00 - Telefones: (51)99684-8538
        </small>

        <p>Rua ********, 900 - Bairro: ***** - Cidade: *** - Cep: 00.000-000</p>
      </div>
      <Link
        href="https://jonassouza1.github.io/web-site-frontend/"
        target="_blank"
        className={styles.desenvolvedor}
      >
        <p>Contato do Desenvolvedor</p>
        <p>deste Site</p>
      </Link>
    </footer>
  );
};
export default Footer;
