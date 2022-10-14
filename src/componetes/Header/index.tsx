import styles from './Header.module.scss';
import stylesTema from '../../assets/styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function Header({children}: {children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa da massa e do código
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}