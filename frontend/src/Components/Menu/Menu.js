import React, { useEffect, useState, useMemo } from "react";

const MENU = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b bg-blue-600 border-gray-400 py-8 px-5">
      <a href="/">
        <img
          className="w-25 h-10 ml-6"
          src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-dark-blue-black-png-image_5517328.jpg"
          alt="logo"
        />
        <h2 className="w-25 h-10 ml-2 text-white text-lg">Blue Fighter</h2>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 border-black"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/users">Users</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
  .hideMenuNav {
    display: none;
  }
  .showMenuNav {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`}</style>
    </div>
  );
};

export default MENU;