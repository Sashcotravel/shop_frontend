import React from 'react';
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";


export const Header = () => {

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Shop</div>
          </Link>
            <div><h3>LOGO</h3></div>
        </div>
      </Container>
    </div>
  );
};
