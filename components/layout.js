import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div
        style={{
          margin: `0 auto`,
          padding: `0 150px 20px`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
