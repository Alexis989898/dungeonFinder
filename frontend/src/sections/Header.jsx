import icon from "../assets/icon_nobg.png"; // Logo dungeonFinder
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import clsx from "clsx";
import { CircleUserRound } from "lucide-react";
import Search from "./Search.jsx";

const Header = () => {
  //Header responsive check
  const [isOpen, setIsOpen] = useState(false);
  //Header scroll animation
  const [hasScrolled, setHasScrolled] = useState(false);
  //Search modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CustomLink = ({ to, text }) => (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className="font-bold text-[16px] leading-[24px] text-p4 transition-colors duration-500 cursor-pointer hover:text-yellow-300 max-lg:my-4 max-lg:text-[32px]"
    >
      {text}
    </NavLink>
  );

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
          hasScrolled && "py-2 bg-slate-950"
        )}
      >
        <div className="container flex h-14 items-center max-lg:px-5">
          {/*Logo mobile*/}
          <NavLink to="/" offset={-100}>
            <div className="logo-wrapper-mobile lg:hidden cursor-pointer z-2">
              <img src={icon} width={155} height={55} alt="logo" />
            </div>
          </NavLink>

          <div
            className={clsx(
              "header-menu w-full max-lg:fixed max-lg:top-0 max-lg:bottom-0 max-lg:items-center max-lg:flex max-lg:left-0 max-lg:w-full max-lg:opacity-0 max-lg:bg-gradient-to-t max-lg:from-slate-900 max-lg:to-slate-950 ",
              isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
            )}
          >
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:p-6 max-lg:overflow-hidden">
              <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="logo-wrapper relative flex flex-1 items-center justify-start">
                    {/*Logo desktop*/}
                    <NavLink
                      to="/"
                      offset={-100}
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
                      <img src={icon} width={155} height={55} alt="logo" />
                    </NavLink>
                  </li>
                  <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start max-lg:fixed max-lg:-my-48">
                    <div onClick={toggleModal} className="font-bold text-[16px] leading-[24px] text-p4 transition-colors duration-500 cursor-pointer hover:text-yellow-300 max-lg:my-4 max-lg:text-[32px]">
                      Find Games
                    </div>
                    <CustomLink to="/Browse" text="Browse Games" />
                    <CustomLink to="/Forum" text="Forum" />

                    <CircleUserRound
                      className="text-yellow-400 cursor-pointer max-lg:hidden"
                      size={40}
                    ></CircleUserRound>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <button
            className="hamburger-btn lg:hidden z-10 size-10 border-2 ml-auto border-yellow-300/70 rounded-full flex justify-center items-center"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`/images/${isOpen ? "x" : "menu"}.svg`}
              alt="magic"
              className="size-1/2 object-contain"
            />
          </button>
        </div>
      </header>

      <Search modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default Header;
