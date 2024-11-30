import { useNavigate } from "react-router-dom";

function SessionCard(props) {
  let navigate = useNavigate();
  function goToSession() {
    let path = "/SystemCard.jsx";
    navigate(path);
  }

  return (
    <div
      onClick={goToSession}
      id="session-wrapper"
      className="w-52 min-w-52 hover:scale-110 hover:outline outline-yellow-300 outline-offset-4  rounded-xl transition-transform cursor-pointer"
    >
      <div id="session-img" className="w-full bg">
        <img
          className="w-full object-fill rounded-t-xl h-64"
          src={props.image}
          alt=""
        />
      </div>
      <div
        id="system-info-wrapper"
        className="bg-white bg-opacity-5 rounded-b-xl"
      >
        <div
          id="session-name"
          className="p-2 pb-0 text-ellipsis text-nowrap overflow-hidden"
        >
          {props.name}
        </div>
        <div id="session-players" className="p-2 pt-0">
          {props.players} players
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
