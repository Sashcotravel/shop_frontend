import React from 'react';
import image from '../image/svg/samwash_logo.png'


const FooterMain = () => {


  return <>
    <div className="footerMain">
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