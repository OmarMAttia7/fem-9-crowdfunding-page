import React from "react";

const navLinks: [string, string, number][] = [
  ["About", "#", 1],
  ["Discover", "#", 2],
  ["Get Started", "#", 3],
];

class Navbar extends React.Component<{}, { navExpanded: boolean }> {
  navBtnRef: React.RefObject<HTMLButtonElement>;
  constructor(props: {}) {
    super(props);
    this.state = { navExpanded: false };
    this.toggleNav = this.toggleNav.bind(this);
    this.navBtnRef = React.createRef();
  }

  toggleNav() {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    return (
      <>
        <nav className="group peer z-20 flex items-center">
          <button
            onFocus={this.toggleNav}
            onBlur={this.toggleNav}
            id="nav-btn"
            aria-expanded={this.state.navExpanded}
            aria-haspopup="true"
            ref={this.navBtnRef}
            className={`h-4 w-4 bg-cover bg-no-repeat bg-center bg-nav-open group-focus-within:bg-nav-close`}
          >

          </button>

          <ul
            className={`absolute left-[6%] top-12 right-[6%] bg-white mt-8 rounded-lg 
                          divide-y divide-opacity-20 divide-gray
                          hidden group-focus-within:block`}
          >

            {navLinks.map((value) => {
              return (
                <li key={value[2]}>
                  <a className="block p-6" href={value[1]}>
                    {value[0]}
                  </a>
                </li>
              );
            })}

          </ul>

        </nav>
        <div className="absolute bg-black w-full h-screen top-0 left-0 opacity-0 -z-10
        peer-focus-within:opacity-50 peer-focus-within:z-10"></div>
        </>
    );
  }
}
export default Navbar;
