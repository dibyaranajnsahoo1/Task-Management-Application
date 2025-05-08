import React, { useContext, useEffect } from "react";
import { TbLayout2Filled } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { HiUserCircle } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { GlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";

function NavBar({ active }) {
  const {
    user,
    mode,
    setMode,
    showNavBar,
    setShowNavBar,
    setWindowWidth,
  } = useContext(GlobalState);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setShowNavBar(width >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, [setShowNavBar, setWindowWidth]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.classList.toggle("darkmode");
  };

  const toggleNavBar = () => setShowNavBar((prev) => !prev);

  if (!showNavBar) {
    return (
      <RiMenu5Fill
        size={25}
        className="absolute z-40 top-10 left-4 cursor-pointer mode-items"
        onClick={toggleNavBar}
      />
    );
  }

  return (
    <nav
      className={`bg-nav-color min-h-screen pt-4 nav-bar ${
        showNavBar && window.innerWidth <= 768
          ? "w-full absolute z-40"
          : "w-52 relative"
      }`}
    >
      <div className="mb-5 pl-3 flex justify-between items-center">
        <h2 className="font-roboto font-extrabold text-sm mode-items">
          <SiGoogletasks className="inline mr-1" />
          Task Management App
        </h2>
        {window.innerWidth <= 768 && (
          <RxCross1
            className="mx-5 cursor-pointer mode-items"
            onClick={toggleNavBar}
          />
        )}
      </div>

      <div className="user m-2 mb-12 p-3 h-14 flex items-center rounded-xl border-border-color">
        <HiUserCircle size={35} className="mr-2 text-priority-color" />
        <div className="flex flex-col">
          <span className="font-bold font-roboto text-sm mode-items">
            {user.name}
          </span>
          <span className="text-[10px] text-[#767575]">{user.email}</span>
        </div>
      </div>

      <span className="text-[#767575] font-roboto text-sm pl-4">Menu</span>
      <ul className="nav-list mt-5 pl-6 text-sm font-roboto text-[#767575]">
        <Link to="/dashboard">
          <li className="h-10 flex items-center justify-between cursor-pointer my-5">
            <span className={active === "/dashboard" ? "active-text" : ""}>
              <TbLayout2Filled className="inline mr-3" size={20} />
              Dashboard
            </span>
            {active === "/dashboard" && <span className="active-tag"></span>}
          </li>
        </Link>

        <Link to="/settings">
          <li className="h-10 flex items-center justify-between cursor-pointer">
            <span className={active === "/settings" ? "active-text" : ""}>
              <IoIosSettings className="inline mr-3 -ml-[2px]" size={24} />
              Settings
            </span>
            {active === "/settings" && <span className="active-tag"></span>}
          </li>
        </Link>
      </ul>

      <div className="cursor-pointer absolute bottom-6 pl-3">
        {mode === "light" ? (
          <MdDarkMode size={25} fill="#767575" onClick={toggleMode} />
        ) : (
          <MdLightMode size={25} fill="#767575" onClick={toggleMode} />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
