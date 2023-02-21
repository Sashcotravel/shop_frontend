import m from "../MainPage.module.css";
import image2 from "../../image2/coverSMART.jpg";
import left from "../../image/svg/free_icon_1 (3).svg";
import right from "../../image/svg/free_icon_1 (2).svg";
import React, { Children, cloneElement, useEffect, useState } from "react";



export const Carousel = ({ children, infinite }) => {

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)



  const leftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 100

      return Math.min(newOffset, 0)
    })
  }
  const rightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 100


      const maxOffset = -(100 * (pages.length - 1))

      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%'
          }
        })
      })
    )
  }, [])


  return (
    <div className={m.sliderBox}>

      <div className={m.window}>
        <img src={left} onClick={leftArrow} className={m.arrowImg} />
        <img src={right} onClick={rightArrow} className={m.arrowImg} />
        <div className={m.all_page_container}
             style={{ transform: `translateX(${offset}%)` }}>
          {
            pages
          }
        </div>
      </div>
    </div>
  )
}