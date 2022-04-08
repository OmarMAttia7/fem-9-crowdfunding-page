"use strict";
import React from "react" ;

import LazyImage from "../../Components/LazyImage";
import Navbar from "./Navbar";

class Header extends React.Component {

  render() {

    return(
      <header className="py-8 px-[6%] flex flex-row justify-between relative">
        <a href="#" className="z-20">
          <LazyImage src="logo.svg" alt="logo" />
        </a>
        <Navbar />
      </header>
      )

  }

}

export default Header;