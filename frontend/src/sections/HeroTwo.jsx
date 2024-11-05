import { Element } from "react-scroll";
import GameList from "../components/GameList";
import cover1 from "../assets/call-of-cthulhu.jpg.webp";

const HeroTwo = () => {
  return (
    <div className="relative border-2 border-amber-400 pt-36 pb-40">
        <Element name="hero" className="px-24">

            <div className=" border-2 border-lime-300 flex absolute gap-5">

                <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                 <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                 <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                 <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                 <GameList
                    image={cover1}
                    name="Call of Cthullu"
                />
                
                
            </div>


        </Element>


    </div>
  )
}

export default HeroTwo
