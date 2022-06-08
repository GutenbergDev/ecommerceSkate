import React from 'react';
import Head from '../Head/Head';
import News from './Main/News';
import SlideHomeMain from './Main/SlideHomeMain';
import data from '../../json/produtos.json';
import ShowCase from '../Pages/ShowCase';

function Home() {

  const [produtos, setProdutos] = React.useState(null);


  React.useEffect(() => {
    setProdutos(data)
  }, [])

  if(produtos === null) return null;
  return (
    <>
      <section>
        <Head title="Skate | Home" description="Página Inicial" />
      </section>
      <main>
        <SlideHomeMain produtoSlide={produtos} />
        <News slideNews={produtos} />
        <ShowCase />
      </main>
    </>
  )
}

export default Home;