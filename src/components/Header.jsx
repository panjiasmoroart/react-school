import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // hook untuk mendapatkan path saat ini

  const navItems = [
    { name: "Home", path: "/", isSpa: false },
    { name: "About", path: "/about", isSpa: true },
    { name: "Courses", path: "/courses", isSpa: true },
    { name: "Contact", path: "/contact", isSpa: true },
  ];

  return (
    <div>
      {/*header*/}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="/">
                <span className="fa fa-diamond"></span>
                Study Course
                <span className="logo">Journey to success</span>
              </a>
            </h1>

            {/* if logo is image enable this   
                        <a className="navbar-brand" href="#/">
                            <img src="image-path" alt="Your logo" title="Your logo" style={{height:"35px}};" />
                        </a> 
                    */}
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                {navItems.map((item) => (
                  <li
                    key={item.path}
                    className={`nav-item ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.isSpa ? (
                      <NavLink
                        to={item.path}
                        className="nav-link"
                        end={item.path === "/"}
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <a href={item.path} className="nav-link">
                        {item.name}{" "}
                        {item.path === "/" && (
                          <span className="sr-only">(current)</span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/*/search-right*/}
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search" aria-hidden="true"></span>
                </a>
                {/* search popup */}
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form
                      action="error.html"
                      method="GET"
                      className="search-box"
                    >
                      <input
                        type="search"
                        placeholder="Search"
                        name="search"
                        required="required"
                        autoFocus=""
                      />
                      <button type="submit" className="btn">
                        <span
                          className="fa fa-search"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </form>
                  </div>
                  <a className="close" href="#close">
                    &times;
                  </a>
                </div>
                {/* /search popup */}
              </div>
              <div className="top-quote mr-lg-2 text-center">
                <a href="#login" className="btn login mr-2">
                  <span className="fa fa-user"></span>
                  &nbsp; login
                </a>
              </div>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      // checked={checked}
                      // onChange={changeTheme}
                    />
                    <div className="mode-container py-1">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
      {/*/header*/}
    </div>
  );
};

export default Header;
