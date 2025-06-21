'use client';
import { useEffect } from 'react';

export default function SpreadshirtEmbed() {
  useEffect(() => {
    // Set global config
    window.spread_shop_config = {
      shopName: 'cfprod',
      locale: 'us_US',
      prefix: '//shop.spreadshirt.com',
      baseId: 'myShop'
    };

    // Inject script
    const script = document.createElement('script');
    script.src = '//shop.spreadshirt.com/shopfiles/shopclient/shopclient.nocache.js';
    script.type = 'text/javascript';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="m80">
      <div id="myShop">
        <a href="//shop.spreadshirt.com/cfprod">cfprod</a>
      </div>
    </section>
  );
}
