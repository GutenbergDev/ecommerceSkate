import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import styles from './News.module.css';
import RightArrow from '../../../images/icon/rightIcon.png';
import LeftArrow from '../../../images/icon/leftIcon.png';


const News = ({ slideNews }) => {
  const slide = slideNews.filter((produtos) => produtos.status === 'new');
  //console.log(slide)

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );


  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft className={styles.LeftArrow} />,
    nextArrow: <SlickArrowRight className={styles.RightArrow} />
  };

  

  //if(produtos === null) return null;
  return (
    <section className={`${styles.container} animeLeft`}>
      <div className={styles.novos}>
        <span>Novos</span>
      </div>

      <Slider
        className={`${styles.carousel}`}
        {...settings}
      >
        {slide.map((produto) =>(
          <section
            key={produto.nameId}
          >
            <div className={styles.containerItem} key={produto.id}>
              <div className={styles.contentItem1}>
                <NavLink 
                  to={`/`}
                >
                  <img src={produto.image} alt={produto.name} />
                </NavLink>
              </div>

              <div className={styles.contentItem2}>
                <p>{produto.name}</p>
                <span className={styles.oldPrice}>de R$ {(produto.OldPrice).toFixed(2)} por</span>
                <span>6x de R$ {(produto.price / 6).toFixed(2)}</span>
                <span><span className={styles.oldPrice}>ou</span> R$ {produto.price}<span className={styles.oldPrice}> à vista</span></span>
              </div>

              
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
            </div>
          </section>
        ))}
      </Slider>
    </section>
  )
}

export default News;