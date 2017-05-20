/**
 * Created by freeman on 17-5-15.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import { Link } from 'react-router'
const Carousel = ({data}) => {


  const settings = {
    arrows:false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="banner-slider">
      <Slider className="slider-list" {...settings}>
        {data.map(item => (
          <div key={item.infoId} className="slider-list__item">
            {
              item.parentId?
                <Link to={`/${item.parentId==='1'?'recruit':item.parentId==='2'?'travel':'edu'}/detail/${item.infoId}`}>
                  <img src={`/${item.image}`} alt="" width="100%"/>
                </Link>
                :
                <img src={`/${item.image}`} alt="" width="100%"/>
            }
          </div>
        ))}
      </Slider>
    </div>
  )
}
Carousel.propTypes = {
  data: PropTypes.array.isRequired
}
export default Carousel
