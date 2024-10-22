import icon from "../assets/icon_nobg.png";
import { Link as LinkScroll } from "react-scroll";
import { CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [hasScrolled, sethasScrolled] = useState(false);

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
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <>
      <header
        className={clsx(
          "top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
          hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
        )}
      >
        <div className="flex items-center w-full h-24 justify-center  max-lg:gap-64 max-md:gap-32 max-sm:gap-12 ">
          <img
            className="h-40 mr-auto cursor-pointer"
            src={icon}
            alt="dungeonFinder icon"
          />

        <div className="">
           <ul className="space-x-12 flex uppercase">
            <li>Find Games</li>
            <li>Browse Games</li>
            <li>Forum</li>
            <CircleUserRound className="text-yellow-400 cursor-pointer" />
           </ul>
        </div>
          
        </div>
      </header>
    </>
  );
};

export default Header;
