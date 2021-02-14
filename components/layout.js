import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div
        style={{
          margin: `0 auto`,
          // maxWidth: '960px',
          padding: `0 150px 0`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
