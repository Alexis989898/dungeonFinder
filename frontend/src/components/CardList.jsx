import Card from "./SystemCard.jsx";
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

function CardList(props) {
  const Icon = props.icon;
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="rpg-system-list-wrapper" className="">
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

      <div className="relative flex overflow-visible">
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
          className="flex gap-4 overflow-x-scroll overflow-y-visible scroll-smooth hide-scrollbar h-96 px-5 items-center"
        >
          {props.games.map((game, index) => (
            <Card key={index} name={game.name} image={game.image} />
          ))}
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

export default CardList;
