function Game(props) {
  return (
    <div id="system-wrapper" className="w-52 h-72 min-w-52">
      <div id="system-img" className="w-full bg">
        <img
          className="w-full object-fill rounded-t-xl h-64"
          src={props.image}
          alt=""
        />
      </div>
      <div id="system-info-wrapper" className="bg-white bg-opacity-5 rounded-b-xl">
        <div id="system-name" className="p-2 pb-0">{props.name}</div>
        <div id="system-available" className="p-2 pt-0">{props.available} Games available</div>
      </div>
    </div>
  );
}

export default Game;
