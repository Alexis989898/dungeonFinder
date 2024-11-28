import { useState } from "react";
import { X, Search } from "lucide-react";

const SearchModal = ({ modal, toggleModal }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      toggleModal();
    }, 400); // Match this duration with the fade-out animation
  };

  return (
    <>
      {modal && (
        <div
          className={`modal-wrapper fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
            fadeOut ? "fade-out" : "fade-in"
          }`}
        >
          <div
            onClick={handleClose}
            className="overlay absolute top-0 left-0 w-full h-full"
          ></div>
          <div
            className="modal-content relative flex justify-start align-baseline flex-col bg-slate-950 rounded-xl
           outline-yellow-400 outline outline-offset-4
           p-6 -top-40 max-lg:left-0 max-lg:py-6 max-lg:px-6 "
          >
            <h2 className="text-xl font-bold mb-4 max-lg:pr-10">
              Search Games
            </h2>
            <div className="flex justify-between items-center gap-5 mr-10">
              <input
                type="text"
                placeholder="ex: Dungeons & Dragons"
                className="w-full border p-2 pr-20 rounded-md text-black outline-yellow-400 focus:outline outline-offset-4"
              />
              <button>
                <Search size={32} className="hover:text-yellow-400 transition-all duration-300"/>
              </button>
            </div>
            <button
              className="close-modal absolute top-2 right-2 text-gray-500 transition-all duration-300 hover:text-yellow-400"
              onClick={handleClose}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
