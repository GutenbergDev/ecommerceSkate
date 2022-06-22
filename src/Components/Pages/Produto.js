import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  //const [produtoIndex, setProdutoIndex] = React.useState(null);


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
    <section className={`${styles.container2}`}>
      <div className={styles.content1}>
        <h1><img src={produto.image} alt='Imagem produto' /></h1>
      </div>
      <div className={styles.content2}>
        {produto.discount <= 20 ? 
          <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#CCC500", width: "4rem", padding: ".2rem", fontSize: "1rem", color: "#fff"}}>
            <span >{produto.discount}%</span> 
          </div>
          : produto.discount <= 40 ?
          <div style={{display: "flex", justifyContent: "center", backgroundColor: "#FFAE00", width: "4rem", padding: ".2rem", fontSize: "1rem", color: "#fff" }}>
            <span>{produto.discount}%</span> 
          </div>
          : produto.discount > 50 ?
          <div style={{display: "flex", justifyContent: "center", backgroundColor: "#FF0000", width: "4rem", padding: ".2rem", fontSize: "1rem", color: "#fff" }}>
            <span>{produto.discount}%</span> 
          </div>
          :
          <div style={{display: "flex", justifyContent: "center", backgroundColor: "#FF0000", width: "4rem", padding: ".2rem", fontSize: "1rem", color: "#fff" }}>
            <span>{produto.discount}%</span> 
          </div>
        }
        <h2>{produto.name}</h2>
        <p className={styles.oldPrice}>de R$ {produto.OldPrice.toFixed(2)}</p>
        <h3>por R$ {produto.price.toFixed(2)}</h3>
        
        <span className={styles.vista}>R$ {produto.price.toFixed(2) - ((produto.price.toFixed(2)) * (produto.discount / 100)).toFixed(2)} à vista</span>
      </div>
    </section>
  )
}

export default Produto;