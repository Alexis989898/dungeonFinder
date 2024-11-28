import Game from "../components/Game.jsx";

function Browser() {
  return (
    <>
      <div className="m-32 browser-container mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-8">
        {/* Search Section */}
        <div className="search-section flex flex-col gap-4 bg-slate-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400">
            Search for Games
          </h2>
          <input
            type="text"
            placeholder="Search games, genres, or keywords..."
            className="w-full px-4 py-2 text-sm rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Filter Section */}
        <div className="filter-section mt-8 bg-slate-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Filter: Game Types */}
            <div className="filter-group">
              <label className="text-sm font-bold text-white">Game Type</label>
              <select className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Any</option>
                <option value="tabletop">Tabletop RPG</option>
                <option value="dnd">D&D</option>
                <option value="cyberpunk">Cyberpunk</option>
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
                className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Filter: Difficulty Level */}
            <div className="filter-group">
              <label className="text-sm font-bold text-white">Difficulty</label>
              <select className="w-full mt-2 px-4 py-2 text-sm rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section mt-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Results</h2>
          <div className="game-results grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example games using Game component */}
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
