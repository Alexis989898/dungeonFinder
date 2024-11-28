const Search = ({ modal, toggleModal }) => {
    return (
      <>
        {modal && (
          <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div
              onClick={toggleModal}
              className="overlay absolute top-0 left-0 w-full h-full"
            ></div>
            <div className="modal-content bg-white rounded-lg p-6 relative">
              <h2 className="text-2xl font-bold mb-4">Search Games</h2>
              <input
                type="text"
                placeholder="Search for games..."
                className="w-full border p-2 rounded-md mb-4"
              />
              <button
                className="close-modal absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={toggleModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Search;
  