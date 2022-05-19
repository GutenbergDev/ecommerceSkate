import React from 'react';
import styles from './SlideHomeMain.module.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

const SlideHomeMain = ({ produtoSlide }) => {  
  let slide = produtoSlide.filter((produtos) => produtos.userId === "produtoSlide");
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows:false,
    appendDots: dots => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1.4rem",
          height: "1.4rem",
          color: "blue",
          border: "1px blue solid",
          borderRadius: "4rem",
          marginRight: "1rem",
        }}
      >
      </div>
    )
  };

  if(slide === null) return null;
  return (
    <section className={`${styles.container} animeLeft`}>
      <Slider 
        className={styles.carousel}
        {...settings}
      >
        {slide.map((produto) => (
          <NavLink to={`/destaque-${produto.nameId}`} key={produto.nameId}>
            <div className={styles.containerSlide} key={produto.id}>
              <img src={produto.image} alt={produto.name} />
            </div>
          </NavLink>
        ))}
      </Slider>
    </section>
  )
}

export default SlideHomeMain;