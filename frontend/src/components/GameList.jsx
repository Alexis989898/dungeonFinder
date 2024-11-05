function GameList(props) {
  return (
    <div className="max-w-sm rounded relative w-64">
      <div className="relative w-auto h-auto">
        <img src={props.image} alt={props.name} className="" />
      </div>
      <div className="py-4 flex flex-col gap-0 bg-gray-900 px-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl w-full">
            Call of Cthulu
          </h2>
          <div className="bg-[#161921] rounded-md">
            <p className="text-white text-sm font-bold capitalize"></p>
          </div>
        </div>
        <div className="flex flex-row  items-center">
          <p className="text-base text-white font-bold">12 Games Available</p>
        </div>
      </div>
    </div>
  );
}

export default GameList;
