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
          <NavLink
            to={`/`}
            key={produto.nameId}
          >
            <div className={styles.containerItem} key={produto.id}>
              <img src={produto.image} alt={produto.name} />
            </div>
          </NavLink>
        ))}
      </Slider>
    </section>
  )
}

export default News;