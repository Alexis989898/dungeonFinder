import Game from "../components/SystemCard.jsx";
import Session from "../components/SessionCard.jsx";

function Browser() {
  return (
    <>
      <div className="browser-container m-32 container">
        {/* Search Section */}
        <div className="search-section flex flex-col gap-4 bg-slate-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400">Search</h2>
          <input
            type="text"
            placeholder="Search sessions, systems or keywords..."
            className="w-full px-4 py-2 text-sm rounded-lg bg-slate-800 text-white 
            custom-outline"
          />
        </div>

        {/* Filter Section */}
        <div className="filter-section mt-8 bg-slate-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Filter: Type */}
            <div className="filter-group">
              <label className="text-sm font-bold text-white">Type</label>
              <select className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white custom-outline">
                <option value="">Any</option>
                <option value="session">Session</option>
                <option value="system">System</option>
              </select>
            </div>

            {/* Filter: Location */}
            <div className="filter-group">
              <label className="text-sm font-bold text-white">Location</label>
              <select className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white custom-outline">
                <option value="">Any</option>
                <option value="10km">Within 10 km</option>
                <option value="50km">Within 50 km</option>
                <option value="online">Online</option>
              </select>
            </div>

            {/* Filter: Number of Players */}
            <div className="filter-group">
              <label className="text-sm font-bold text-white">
                Number of Players
              </label>
              <input
                type="number"
                min="1"
                max="20"
                placeholder="e.g., 5"
                className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white 
                custom-outline"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section my-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Results</h2>
          <div
            className="game-results grid  grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-[690px]:grid-cols-2 max-sm:grid-cols-2 
          gap-4 justify-center justify-items-center"
          >
            {/* Example games using Game component */}
            {[
              {
                name: "Cool Pedrinho session",
                image: "src/assets/icon.jpeg",
                players: 2,
              },
            ].map((session, index) => (
              <Session
                key={index}
                name={session.name}
                image={session.image}
                players={session.players}
              />
            ))}

            {[
              {
                name: "Cyberpunk",
                image: "src/assets/exampleCovers/ExampleCover1.jpg",
                available: 12,
              },
              {
                name: "Dungeons & Dragons",
                image: "src/assets/exampleCovers/ExampleCover2.jpg",
                available: 8,
              },
              {
                name: "Shadowrun",
                image: "src/assets/exampleCovers/ExampleCover3.jpg",
                available: 5,
              },
              {
                name: "Pathfinder",
                image: "src/assets/exampleCovers/ExampleCover4.jpg",
                available: 10,
              },
              {
                name: "Cyberpunk",
                image: "src/assets/exampleCovers/ExampleCover1.jpg",
                available: 12,
              },
              {
                name: "Dungeons & Dragons",
                image: "src/assets/exampleCovers/ExampleCover2.jpg",
                available: 8,
              },
              {
                name: "Shadowrun",
                image: "src/assets/exampleCovers/ExampleCover3.jpg",
                available: 5,
              },
              {
                name: "Pathfinder",
                image: "src/assets/exampleCovers/ExampleCover4.jpg",
                available: 10,
              },
            ].map((game, index) => (
              <Game
                key={index}
                name={game.name}
                image={game.image}
                available={game.available}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Browser;
