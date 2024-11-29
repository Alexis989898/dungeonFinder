import { Element } from "react-scroll";
import GameList from "../components/GameList.jsx";
import { Crown, AlarmClockCheck } from "lucide-react";
import mainImageTest from "../assets/mainImageTest.jpg";
const Hero = () => {

  const games = [
    { name: "Cyberpunk", image: "src/assets/exampleCovers/ExampleCover1.jpg" },
    { name: "Dungeons & Dragons", image: "src/assets/exampleCovers/ExampleCover2.jpg" },
    { name: "Call of Cthulhu", image: "src/assets/exampleCovers/ExampleCover3.jpg" },
    { name: "Vampire", image: "src/assets/exampleCovers/ExampleCover4.jpg" },
    { name: "Pathfinder", image: "src/assets/exampleCovers/ExampleCover5.png" },
    { name: "Star Wars", image: "src/assets/exampleCovers/ExampleCover6.jpg" },
    { name: "Traveller", image: "src/assets/exampleCovers/ExampleCover7.jpg" },
    { name: "Posthuman Saga", image: "src/assets/exampleCovers/ExampleCover8.png" },
    { name: "A Bandeira do Elefante e da Arara", image: "src/assets/exampleCovers/ExampleCover9.png" },
    { name: "Electric Bastionland", image: "src/assets/exampleCovers/ExampleCover10.png" },
  ];  

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="hero-container mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="rpg-cover-wrapper w-full h-[1000px]">
            <div className="radial-gradient-cover nested"></div>
            <img
              className="rpg-cover-img nested w-full block object-bottom"
              src={mainImageTest}
              alt=""
            />
          </div>
          
          <div id="lists-wrapper" className=" flex flex-col gap-16 relative -top-[200px] z-10">
            <GameList icon={Crown} name="Most Popular" games={games} />
            <GameList icon={AlarmClockCheck} name="Most Recent" games={games}/>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
