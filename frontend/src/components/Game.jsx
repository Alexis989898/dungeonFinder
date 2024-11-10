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
      <div id="system-name">{props.name}</div>
    </div>
  );
}

export default Game;
