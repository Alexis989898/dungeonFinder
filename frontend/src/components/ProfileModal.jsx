import { useState } from "react";
import { X, Settings, User } from "lucide-react";
import { NavLink } from "react-router";

const ProfileModal = ({ modal, togglePModal }) => {
  const [pFadeOut, pSetFadeOut] = useState(false);

  const handlePClose = () => {
    pSetFadeOut(true);
    setTimeout(() => {
      pSetFadeOut(false);
      togglePModal();
    }, 400); // Match this duration with the fade-out animation
  };

  const CustomLink = ({ to, text }) => (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className="font-bold text-[16px] leading-[24px] text-p4 transition-colors duration-500 cursor-pointer hover:text-yellow-300 max-lg:my-4 max-lg:text-[32px]"
    >
      {text}
    </NavLink>
  );

  return (
    <>
      {modal && (
        <div
          className={`modal-wrapper fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
            pFadeOut ? "fade-out" : "fade-in"
          }`}
        >
          <div
            onClick={handlePClose}
            className="overlay absolute top-0 left-0 w-full h-full"
          ></div>

          <div
            className="modal-content -top-48 -right-[28rem] relative flex flex-col items-start bg-slate-900 rounded-xl 
            outline-yellow-400 outline outline-offset-4 p-6 text-white max-w-md w-64 shadow-lg"
          >
            <NavLink
              to={"/Profile"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-xl hover:text-yellow-300 transition-colors duration-300 mb-4"
            >
              <User size={24} />
              Profile
            </NavLink>
            <button className="flex items-center gap-2 text-xl hover:text-yellow-300 transition-colors duration-300">
              <Settings size={24} />
              Settings
            </button>
            <button
              className="close-modal absolute top-4 right-4 text-gray-500 hover:text-yellow-400 transition-all duration-300"
              onClick={handlePClose}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
