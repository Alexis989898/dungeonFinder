import Game from "./Game.jsx";
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

function GameList(props) {
  const Icon = props.icon;
  const carouselRef = useRef(null);

  // Scroll to the left or right by a fixed amount
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust to control how far to scroll
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="rpg-system-list-wrapper">
      <div
        id="list-name-div"
        className="w-full flex bg-white px-2 py-1 rounded-xl justify-center bg-opacity-5 gap-3"
      >
        <div id="list-icon" className="text-yellow-400 pt-1 pr-1">
          <Icon size={18} />
        </div>
        <div id="list-name" className="font-bold">{props.name}</div>
        <div id="view-all-btn" className="ml-auto cursor-pointer hover:text-yellow-300 hover:transition-colors hover:duration-500 font-bold">
          View All
        </div>
      </div>

      <div className="relative mt-4">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
        >
           <ChevronLeft/>
        </button>

        {/* Carousel container */}
        <div
          id="system-list"
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth hide-scrollbar"
        >
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          <Game name="Teste" image="" />
          {/* Add as many <Game> components as needed */}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight/>
        </button>
      </div>
    </div>
  );
}

export default GameList;
