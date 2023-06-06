import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link legacyBehavior href="/">
            Inicio
          </Link>
          <Link legacyBehavior href="/nosotros">
            nosotros
          </Link>
          <Link legacyBehavior href="/blog">
            blog
          </Link>
          <Link legacyBehavior href="/tienda">
            tienda
          </Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservador {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
