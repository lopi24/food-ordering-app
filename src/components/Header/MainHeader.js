import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [burger_class, setBugerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [divHeight, setDivHeight] = useState("5rem");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBugerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setDivHeight("100%");
    } else {
      setBugerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setDivHeight("5rem");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const burgerMenu = (
    <div
      style={{
        width: "100%",
        height: divHeight,
        position: "absolute",
        top: "0",
        zIndex: "1",
      }}
    >
      <section className="logo">
        <h1>LAMON</h1>
      </section>
      <nav className="navBurger">
        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/ourStory">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/reservation">Reservation</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  const defaultMenu = (
    <header className="header">
      <section className="logo">
        <h1>LAMON</h1>
      </section>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ourStory">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  // console.log(screenSize.width);
  return (
    <>
      {screenSize.width > 768 && defaultMenu}
      {screenSize.width <= 768 && burgerMenu}
    </>
  );
};

export default MainHeader;
