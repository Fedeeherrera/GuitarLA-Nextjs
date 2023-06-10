import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen Guitarra ${nombre}`}
        width={400}
        height={600}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace} href="">
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
