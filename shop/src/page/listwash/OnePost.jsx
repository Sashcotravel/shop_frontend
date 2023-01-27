import React, { useEffect } from 'react'
import '../Obl.css'
import ImageSlider from "./ImageSlider";
import image from '../../image/svg/Group 59.svg'
import image2 from '../../image2/coverMARCHELLO.jpg'
import Breadcrumbs from "../../Breadcrumbs";
import { useLocation, useParams } from "react-router-dom";
import { listWash } from "../../users";



const OnePost = ({ post, setOnFooter, t, lang, setPost }) => {

  const location = useLocation()
  const { idMiyka } = useParams();

  useEffect(() => {
    setOnFooter(true)
    if (post === null) {
      listWash.map((item, i) => {
        if(item.imgNum === Number(idMiyka)){
          setPost(item)
        }
      });
    }


    return () => {
      setOnFooter(false)
    }
  }, [])

  const road = () => {

  }

  return (
    <>
      <div className='boxPost2'>

        {/*<div style={{ background: `url(${image2})`, backgroundSize: "cover", height: '150px', marginBottom: '20px' }}>*/}
        <div className={post?.city === 'Хуст' ? "divIm1" : post?.city === 'Тернопіль' ? "divIm1" : ''}>
          <div className={post?.city === 'Хуст' ? "divIm2" : post?.city === 'Тернопіль' ? "divIm2" : ''}>
            { location.pathname === "/" ? "" : <Breadcrumbs /> }
            <h4 className="titlePost">SamWash {post?.city}</h4>
            <p className="dataTitle">{post?.city}</p>
            <br />
          </div>
        </div>

          <figure className='containerStyle'>
            {post?.src.map((item, index) => {
              if(item.slice(0, 4) === 'http') {
                return <iframe key={index} className='imageBox' src={item}/>
              }
              return <img className='imageBox' key={index} src={item} />
            })}
          </figure>


        {/*<div className='containerStyle'>*/}
          {/*<ImageSlider sliders={post?.src} />*/}
          {/*</figure>*/}
          {/*<div style={{ height: "315px" }}>*/}
          {/*  <iframe id="img4" width="100%" height='100%' src={sliders}/>*/}
          {/*</div>*/}
          {/*</figure>*/}
        {/*</div>*/}

        <p className='pSt'>вул. {post?.st}, м. {post?.city}, {post?.obl.split(' ')[0]} обл.</p>

          <a href={post?.map} style={{color: 'white'}}>
            <div className="marshBut">
              <img style={{ position: "relative", left: "10px", width: '14%' }} src={image} />
              <span style={{ position: "relative", right: "10px" }}>Прокласти маршрут</span>
            </div>
          </a>


        <p className='serv'>Сервіси на автомийці</p>

        <div className='servDiv'>
          {post?.desc.map((item, index) => <div className='servDiv2' key={index}>
            <span className='spanGrad'></span>
            <span style={{fontSize: '14px', width: '126px'}}>{item}</span>
          </div>)}
        </div>
        <p className='desc2'>{post?.desc2}</p>

        <div onClick={road} className='hosh'>Хочу собі таку!</div>

      </div>
    </>
  )
}

export default OnePost