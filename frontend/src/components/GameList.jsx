import Game from "./Game.jsx"

function GameList(props) {
  const Icon = props.icon;

  return (
    <div id="rpg-system-list-wrapper">
      <div
        id="list-name-div"
        className="w-full flex bg-white px-2 py-1 rounded-xl justify-center bg-opacity-5"
      >
        <div id="list-icon" className="text-yellow-400 pt-1 pr-1">
          <Icon size={18} />
        </div>
        <div id="list-name">{props.name}</div>
        <div id="view-all-btn" className="ml-auto cursor-pointer">
          View All
        </div>
      </div>

      <div id="system-list" className="flex mt-4 gap-4">
        <Game name="Porra" image=""/>
      </div>
    </div>
  );
}

export default GameList;
