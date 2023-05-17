
import React, { useState } from 'react';
import style from './Carroussel.module.scss';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

const Carroussel = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className={style.carrousel}>
      {pictures.map((picture, index, title) => {
        return (
          <div
            key={index}
            className={`index === current ? ${style.carrouselpictureactive} : ${style.carrouselpictureinactive}`}
          >
            {index === current && (
              <img
                src={picture}
                alt={title}
                className={style.carrouselpicture}
              />
            )}
          </div>
        )
      })}

      {length > 1 ? (
        <>
          <div className={style.previous} onClick={prevSlide}>
            <img
              src={leftArrow}
              alt="slide précédent"
              className={style.leftArrow}
            />
          </div>
          <div className={style.next} onClick={nextSlide}>
            <img src={rightArrow}
               alt="slide suivant" 
               className={style.rightArrow} />
          </div>
        </>
      ) : null}
      <div className={style.number}>
        {current + 1} / {length}
      </div>
    </div>
  )
}
export default Carroussel;