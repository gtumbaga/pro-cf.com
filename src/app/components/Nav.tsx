"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();
    console.log(`pathname:[${pathname}]`);

  return (
    <>
        <div className={styles.Nav}>
            <div >
                <ul>
                    <li className={'nav-item ' + (pathname == '/' ? 'active' : '')}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={'nav-item ' + (pathname == '/djs/' ? 'active' : '')}>
                        <Link href="/djs">DJs</Link>
                    </li>
                    <li className={'nav-item ' + (pathname == '/mixes/' ? 'active' : '')}>
                        <Link href="/about">Mixes</Link>
                    </li>
                    <li className={'nav-item ' + (pathname == '/swag/' ? 'active' : '')}>
                        <Link href="/about">Buy Swag!</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default Nav;
