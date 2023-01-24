import React, { useEffect } from 'react'
import '../Obl.css'
import ImageSlider from "./ImageSlider";
import image from '../../image/svg/Group 59.svg'



const OnePost = ({ post, setOnFooter, t, lang}) => {

  useEffect(() => {
    setOnFooter(true)
    return () => {
      setOnFooter(false)
    }
  }, [])

  const road = () => {

  }

  return (
    <>
      <div className='boxPost2'>

        <div>
        <h4 className='titlePost'>SamWash {post?.city}</h4>
        <p className='dataTitle'>{post?.city}</p>
        <br/>

        <div className='containerStyle'>
          <ImageSlider sliders={post?.src} />
        </div>

        <p className='pSt'>вул. {post?.st}, м. {post?.city}, {post?.obl.split(' ')[0]} обл.</p>
        </div>

        <div onClick={road} className='marshBut'>
          <img style={{position: 'relative', left: '10px'}} src={image} />
          <span style={{position: 'relative', right: '10px'}}>Прокласти маршрут</span>
        </div>

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