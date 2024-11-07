import { Element } from "react-scroll";
import GameList from "../components/GameList.jsx";
import cover1 from "../assets/call-of-cthulhu.jpg.webp";
import { Crown, AlarmClockCheck } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative border-2 border-amber-400 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="hero-container mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="rpg-cover-wrapper w-full h-[1000px]">
            <div className="radial-gradient-cover nested"></div>
            <img
              className="rpg-cover-img nested w-full block object-bottom"
              src={cover1}
              alt=""
            />
          </div>
          
          <div id="lists-wrapper" className=" flex flex-col gap-16 relative -top-[200px] z-10">
            <GameList icon="Crown" name="Most Popular" />
            <GameList icon="AlarmClockCheck" name="Most Recent" />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
