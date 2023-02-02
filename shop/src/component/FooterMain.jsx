import React from 'react';


const FooterMain = ({ o }) => {

  if(o === -156){
    o = -156
  } else if(o = -115) {
    o = -115
  } else {
    o = 0
  }

  return <>
    <div className="footerMain" style={o === 0 ? {bottom: '0'}
      : o === -156 ? {bottom: '-156px'} : {bottom: '-115px'}}>
      <div className='footerMain2'>
        <div>
          <img src={require("../image/svg/samwash_logo.png")} />
        </div>
        <hr style={{border: '1px solid #575758', width: '100%', marginTop: '15px'}} />
        <div>
          <p style={{marginTop: '15px'}}>© samwash.com, 2023</p>
        </div>
      </div>
    </div>
  </>;
}

export default FooterMain