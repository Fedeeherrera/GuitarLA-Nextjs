import Layout from "../components/layout";

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <>
      <Layout
        title={`Tienda Virtual`}
        description={`Tienda Virtual, Venta de guitarras, GuitarLA`}
      >
        <main className="contenedor">
          <h1 className="heading">Tienda Virtual</h1>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
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
