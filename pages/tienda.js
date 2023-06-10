import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  return (
    <>
      <Layout
        title={`Tienda Virtual`}
        description={`Tienda Virtual, Venta de guitarras, GuitarLA`}
      >
        <main className="contenedor">
          <h1 className="heading">Tienda Virtual</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => {
              return (
                <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
              );
            })}
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `http://127.0.0.1:1337/api/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}
