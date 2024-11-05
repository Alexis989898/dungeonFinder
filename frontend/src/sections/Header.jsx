import icon from "../assets/icon_nobg.png"; // Logo dungeonFinder
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { CircleUserRound } from "lucide-react";
import { navigation } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      onClick={() => setIsOpen(false)}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="font-bold text-[16px] leading-[24px] text-p4 transition-colors duration-500 cursor-pointer hover:text-yellow-300 max-lg:my-4 max-lg:text-[32px] font-semibold leading-[40px]"
    >
      {title}
    </LinkScroll>
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex h-14 items-center max-lg:px-5">
          <div className="logo-wrapper-mobile lg:hidden cursor-pointer z-2">
            <img src={icon} width={155} height={55} alt="logo" />
          </div>

          <div
            className={clsx(
              "header-menu w-full max-lg:fixed max-lg:top-0 max-lg:bottom-0 max-lg:items-center max-lg:flex max-lg:left-0 max-lg:w-full max-lg:opacity-0",
              isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
            )}
          >
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:p-6 max-lg:overflow-hidden">
              <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="logo-wrapper relative flex flex-1 items-center justify-start">
                    <LinkScroll
                      to="hero"
                      offset={-100}
                      spy
                      smooth
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
                      <img src={icon} width={155} height={55} alt="logo" />
                    </LinkScroll>
                  </li>
                  <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                    <NavLink title="Find Games" />
                    <NavLink title="Browse Games" />
                    <NavLink title="Forum" />
                    <CircleUserRound className="text-yellow-400 cursor-pointer max-lg:hidden" size={40}></CircleUserRound>
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
    </>
  );
};

export default Header;
