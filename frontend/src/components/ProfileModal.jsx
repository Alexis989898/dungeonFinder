import { useState } from "react";
import { X, Search } from "lucide-react";

const ProfileModal = ({ modal, togglePModal }) => {
  const [pFadeOut, pSetFadeOut] = useState(false);

  const handlePClose = () => {
    pSetFadeOut(true);
    setTimeout(() => {
      pSetFadeOut(false);
      togglePModal();
    }, 400); // Match this duration with the fade-out animation
  };

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

          <div className="ELEMENTSHERE">modal de configurações e perfil</div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
