/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
import React from "react";

// eslint-disable-next-line react/display-name
const CustomLink = React.forwardRef(({ href, onClick, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
  </a>
));

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <CustomLink>
            <Image
              src="/img/logo.svg"
              width={300}
              height={40}
              alt="Imagen Logotipo"
            />
          </CustomLink>
        </Link>
        <nav className={styles.navegacion}>
          <Link legacyBehavior href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>
              Inicio
            </a>
          </Link>
          <Link legacyBehavior href="/nosotros">
            <a className={router.pathname === "/nosotros" ? styles.active : ""}>
              nosotros
            </a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              blog
            </a>
          </Link>
          <Link legacyBehavior href="/tienda">
            <a className={router.pathname === "/tienda" ? styles.active : ""}>
              tienda
            </a>
          </Link>
          <Link href='/carrito'>
            <a >
              <Image width={30} height={25} src="/img/carrito.png" alt="Icono Carrito"/>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
