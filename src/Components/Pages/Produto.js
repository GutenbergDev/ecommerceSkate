import React from 'react';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { nameId } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        setProduto(json.find(item => item.nameId === nameId));
      } catch (erro) {
        setError('Um erro ocorreu')
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`/static/json/produtos.json`);
  }, [nameId])

  if(loading) return<div>Carregando...</div>;
  if(error) return <p>{error}</p>;
  if(produto === null) return null;
  return (
    <section>
      <h1>{produto.name}</h1>
    </section>
  )
}

export default Produto;