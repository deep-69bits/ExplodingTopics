import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#F5FAFF] overflow-x-hidden bgBackground">
      <div className="flex">
        <svg
          className="absolute hidden lg:block  z-0 mx-auto lg:scale-x-100   translate-y-[-20px]"
          version="1.1"
          viewBox="0 0 800 800"
          opacity="0.08"
          width="800"
          height="800"
        >
          <g strokeWidth="1.5" stroke="hsla(242, 52%, 74%, 1.00)" fill="none">
            <rect width="160" height="160" x="0" y="0"></rect>
            <rect width="160" height="160" x="160" y="0"></rect>
            <rect width="160" height="160" x="320" y="0"></rect>
            <rect width="160" height="160" x="480" y="0"></rect>
            <rect width="160" height="160" x="640" y="0"></rect>
            <rect width="160" height="160" x="800" y="0"></rect>
            <rect width="160" height="160" x="0" y="160"></rect>
            <rect width="160" height="160" x="160" y="160"></rect>
            <rect width="160" height="160" x="320" y="160"></rect>
            <rect width="160" height="160" x="480" y="160"></rect>
            <rect width="160" height="160" x="640" y="160"></rect>
            <rect width="160" height="160" x="800" y="160"></rect>
            <rect width="160" height="160" x="0" y="320"></rect>
            <rect width="160" height="160" x="160" y="320"></rect>
            <rect width="160" height="160" x="320" y="320"></rect>
            <rect width="160" height="160" x="480" y="320"></rect>
            <rect width="160" height="160" x="640" y="320"></rect>
            <rect width="160" height="160" x="800" y="320"></rect>
            <rect width="160" height="160" x="0" y="480"></rect>
            <rect width="160" height="160" x="160" y="480"></rect>
            <rect width="160" height="160" x="320" y="480"></rect>
            <rect width="160" height="160" x="480" y="480"></rect>
            <rect width="160" height="160" x="640" y="480"></rect>
            <rect width="160" height="160" x="800" y="480"></rect>
            <rect width="160" height="160" x="0" y="640"></rect>
            <rect width="160" height="160" x="160" y="640"></rect>
            <rect width="160" height="160" x="320" y="640"></rect>
            <rect width="160" height="160" x="480" y="640"></rect>
            <rect width="160" height="160" x="640" y="640"></rect>
            <rect width="160" height="160" x="800" y="640"></rect>
            <rect width="160" height="160" x="0" y="800"></rect>
            <rect width="160" height="160" x="160" y="800"></rect>
            <rect width="160" height="160" x="320" y="800"></rect>
            <rect width="160" height="160" x="480" y="800"></rect>
            <rect width="160" height="160" x="640" y="800"></rect>
            <rect width="160" height="160" x="800" y="800"></rect>
          </g>
        </svg>
        <svg
          className="absolute hidden lg:block right-0 z-0 mx-auto  scale-x-100 translate-y-[-20px] "
          version="1.1"
          viewBox="0 0 800 800"
          opacity="0.08"
          width="800"
          height="800"
        >
          <g strokeWidth="1.5" stroke="hsla(242, 52%, 74%, 1.00)" fill="none">
            <rect width="160" height="160" x="0" y="0"></rect>
            <rect width="160" height="160" x="160" y="0"></rect>
            <rect width="160" height="160" x="320" y="0"></rect>
            <rect width="160" height="160" x="480" y="0"></rect>
            <rect width="160" height="160" x="640" y="0"></rect>
            <rect width="160" height="160" x="800" y="0"></rect>
            <rect width="160" height="160" x="0" y="160"></rect>
            <rect width="160" height="160" x="160" y="160"></rect>
            <rect width="160" height="160" x="320" y="160"></rect>
            <rect width="160" height="160" x="480" y="160"></rect>
            <rect width="160" height="160" x="640" y="160"></rect>
            <rect width="160" height="160" x="800" y="160"></rect>
            <rect width="160" height="160" x="0" y="320"></rect>
            <rect width="160" height="160" x="160" y="320"></rect>
            <rect width="160" height="160" x="320" y="320"></rect>
            <rect width="160" height="160" x="480" y="320"></rect>
            <rect width="160" height="160" x="640" y="320"></rect>
            <rect width="160" height="160" x="800" y="320"></rect>
            <rect width="160" height="160" x="0" y="480"></rect>
            <rect width="160" height="160" x="160" y="480"></rect>
            <rect width="160" height="160" x="320" y="480"></rect>
            <rect width="160" height="160" x="480" y="480"></rect>
            <rect width="160" height="160" x="640" y="480"></rect>
            <rect width="160" height="160" x="800" y="480"></rect>
            <rect width="160" height="160" x="0" y="640"></rect>
            <rect width="160" height="160" x="160" y="640"></rect>
            <rect width="160" height="160" x="320" y="640"></rect>
            <rect width="160" height="160" x="480" y="640"></rect>
            <rect width="160" height="160" x="640" y="640"></rect>
            <rect width="160" height="160" x="800" y="640"></rect>
            <rect width="160" height="160" x="0" y="800"></rect>
            <rect width="160" height="160" x="160" y="800"></rect>
            <rect width="160" height="160" x="320" y="800"></rect>
            <rect width="160" height="160" x="480" y="800"></rect>
            <rect width="160" height="160" x="640" y="800"></rect>
            <rect width="160" height="160" x="800" y="800"></rect>
          </g>
        </svg>
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
