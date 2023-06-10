import Layout from "../components/layout";
import Link from "next/dist/client/link";

function Pagina404() {
  return (
    <Layout title={`Pagina No Encontrada`}>
      <p className="error">Pagina No Encontrada</p>
      <Link href={"/"}>
        <a className="error-enlace">Ir A Inicio</a>
      </Link>
    </Layout>
  );
}

export default Pagina404;
