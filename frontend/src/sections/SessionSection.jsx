function SessionSection() {
  return (
    <>
      <div
        className="session-wrapper container my-32 pb-12  
      grid gap-10 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        <div className="session-name self-center justify-self-center flex flex-col max-md:flex-row justify-around items-center h-full w-96">
          <div>
            <div className="text-xl font-bold text-yellow-400">Session: </div>
            <div className="text-xl font-bold">Example Session</div>
          </div>
          <button className="bg-blue-700 rounded-xl p-2 w-32 hover:outline outline-blue-700 outline-offset-4 transform transition-all">Ask to Join</button>
        </div>
        <div className="session-img relative max-w-[400px]">
          <img
            className="min-w-64 rounded-xl"
            src="src/assets/exampleCovers/ExampleCover5.png"
            alt="example"
          />
        </div>

        <div className="session-participants bg-slate-900 rounded-xl p-4 min-w-32 flex flex-col justify-around">
          <div className="text-xl font-bold text-yellow-400">Players</div>
          <div className="h-80 overflow-y-auto">
            <div className="player-name">Player 1</div>
            <div className="player-name">Player 2</div>
            <div className="player-name">Player 3</div>
            <div className="player-name">Player 4</div>
            <div className="player-name">Player 5</div>
            <div className="player-name">Player 6</div>
            <div className="player-name">Player 7</div>
            <div className="player-name">Player 8</div>
          </div>
        </div>
        <div className="session-details bg-slate-900 rounded-xl col-span-2 max-lg:col-span-1 p-4">
          <div className="text-xl font-bold text-yellow-400">
            Session details
          </div>
          <div className="details-wrapper">
            <div>
              <strong>System:</strong> Dungeons & Dragons 5e
            </div>
            <div>
              <strong>Date & Time:</strong> Sat, Dec 2, 2024, 6:00 PM
            </div>
            <div>
              <strong>Location:</strong> Online (via Roll20)
            </div>
            <div>
              <strong>Players Needed:</strong> 2 more
            </div>
            <div>
              <strong>Experience Level:</strong> Beginner-friendly
            </div>
            <div>
              <strong>Description:</strong> Join us for a thrilling dungeon
              crawl filled with traps, treasures, and monsters. Perfect for new
              and seasoned adventurers alike.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SessionSection;
