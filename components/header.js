import React from 'react';
import Link from 'next/link';

const Header = ({ siteTitle = 'Api' }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div style={{ padding: `1.45rem 1.0875rem` }}>
      <h1 style={{ margin: 0, textAlign: 'center', color: '#fff' }}>
        <Link
          href='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
