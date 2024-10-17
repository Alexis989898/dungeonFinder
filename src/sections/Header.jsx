import icon from "../assets/icon_nobg.png";
import { CircleUserRound } from "lucide-react";

function Header() {
  return (
    <>
      <div className="flex items-center w-full h-24 justify-center lg:gap-64 md:gap-32 sm:gap-12">
        <img className="h-40 mr-auto" src={icon} alt="dungeonFinder icon" />

        <div className="flex space-x-2">
          <div className="header-menu-item w-16">Home</div>
          <div className="header-menu-item w-28">Find Games</div>
          <div className="header-menu-item w-28">Browse Games</div>
          <div className="header-menu-item w-16">Forum</div>
          <div className="text-yellow-400">
            <CircleUserRound />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
