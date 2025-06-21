import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <>
        <div className="global-header">
            <div className="top">
                <div className="logo-holder">

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
