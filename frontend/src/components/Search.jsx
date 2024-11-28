import { useState } from "react";
import { X } from 'lucide-react';

const Search = ({ modal, toggleModal }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      toggleModal();
    }, 500); // Match this duration with the fade-out animation
  };

  return (
    <>
      {modal && (
        <div
          className={`modal-wrapper fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50 ${
            fadeOut ? "fade-out" : "fade-in"
          }`}
        >
          <div
            onClick={handleClose}
            className="overlay absolute top-0 left-0 w-full h-full"
          ></div>
          <div className="modal-content relative flex justify-start align-baseline flex-col bg-slate-950 rounded-xl p-6 pr-48 left-32 -top-40">
            <h2 className="text-xl pr-64 font-bold mb-4">Search Games</h2>
            <input
              type="text"
              placeholder="Search for games..."
              className="w-full border p-2 rounded-md mb-4"
            />
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

export default Search;
