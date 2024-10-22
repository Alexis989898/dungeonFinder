import test from "../assets/MonsterManualTraditionalCover.webp";
function System() {
  return (
    <div id="system-wrapper" className="w-52 h-72 bg-red-900 rounded-t-full">
      <div id="system-img" className="w-full rounded-t-full">
        <img className="w-full object-contain rounded-t-xl" src={test} alt="" />
      </div>
      <div id="system-name">Template</div>
    </div>
  );
}

export default System;
