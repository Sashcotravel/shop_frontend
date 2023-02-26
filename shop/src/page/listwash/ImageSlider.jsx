// import React, { useState } from "react";
//
//
// const ImageSlider = ({ sliders }) => {
//
//   const [currentIndex, setCurrentIndex] = useState(0)
//
//   const slideStyle = {
//     width: '100%',
//     height: '100%',
//     borderRadius: '18px',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundImage: `url(${sliders[currentIndex]})`
//   }
//
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? sliders?.length -1 : currentIndex -1
//     setCurrentIndex(newIndex)
//   }
//
//   const goToNext = () => {
//     const isLastSlide = currentIndex === sliders?.length -1
//     const newIndex = isLastSlide ? 0 : currentIndex +1
//     setCurrentIndex(newIndex)
//   }
//
//   return (
//     <div className={"sliderStyle"}>
//       {
//         // <figure>
//         // <div style={{ height: "315px" }}>
//         //   <iframe id="img4" width="100%" height='100%' src={sliders}/>
//         // </div>
//         // </figure>
//
//         sliders?.length === 1
//           ? <div style={slideStyle}></div>
//           : <>
//             <div className={"rightArrowStyle"} onClick={goToPrevious}>▶</div>
//             <div style={slideStyle}></div>
//             <div className={"leftArrowStyle"} onClick={goToNext}>◀</div>
//           </>
//       }
//     </div>
//   )
// }
//
// export default ImageSlider