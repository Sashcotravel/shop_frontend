import React from 'react';
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import image5 from '../image/footer.png'


export const Header = () => {

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div>
            <Link to="/">
              <img className={styles.logo} src={image5} />
            </Link>
          </div>
          <div>
            <span className={styles.nomer}>+38 (063) 23 56 478</span>
          </div>
            <div style={{color: 'whitesmoke'}}>Shop</div>
        </div>
      </Container>
    </div>
  );
};
