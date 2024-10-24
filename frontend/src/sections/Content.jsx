import test from "../assets/MonsterManualTraditionalCover.webp";
import cover1 from "../assets/call-of-cthulhu.jpg.webp"
import { Crown, AlarmClockCheck } from "lucide-react";
import System from "../items/System.jsx";

function Content() {
  return (
    <>
      <div id="lists-wrapper" className=" flex flex-col gap-16">
        <div id="rpg-system-list-wrapper">
          <div
            id="list-name-div"
            className="w-full flex bg-white px-2 py-1 rounded-xl justify-center bg-opacity-5"
          >
            <div id="list-icon" className="text-yellow-400 pt-1 pr-1">
              {" "}
              <Crown size={18} />{" "}
            </div>
            <div id="list-name">Most Popular</div>
            <div id="view-all-btn" className="ml-auto cursor-pointer">
              View All
            </div>
          </div>

          <div id="system-list" className="flex mt-4 gap-4">
            <div
              id="system-wrapper"
              className="w-52 h-72"
            >
              <div id="system-img" className="w-full bg">
                <img
                  className="w-full object-fill rounded-t-xl h-64"
                  src={cover1}
                  alt=""
                />
              </div>
              <div id="system-name">Call Of Cthulhu</div>
            </div>
          </div>
        </div>

        <div id="rpg-system-list-wrapper" className=" bg-slate-800">
          <div
            id="list-name-div"
            className="w-full flex bg-white px-2 py-1 rounded-xl justify-center bg-opacity-5"
          >
            <div id="list-icon" className="text-yellow-400 pt-1 pr-1">
              {" "}
              <AlarmClockCheck size={18} />{" "}
            </div>
            <div id="list-name">Newest</div>
            <div id="view-all-btn" className="ml-auto cursor-pointer">
              View All
            </div>
          </div>

          <div id="system-list" className="flex mt-4 gap-4">
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;