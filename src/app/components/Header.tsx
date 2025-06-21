import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => {
  return (
    <>
        <div className="global-header">
            <div className="top">
                <div className="logo-holder">
                    <Link href="/">
                        <img src="/logo-header.png" alt="CF Logo" />
                    </Link>
                </div>
                <div className="logo-text-holder">
                    <img src="/logo-header-text.png" alt="Centrifugal Force Productions" />
                </div>
            </div>
            <Nav />
        </div>
    </>
  );
};

export default Header;
