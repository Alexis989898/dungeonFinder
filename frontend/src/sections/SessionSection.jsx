function SessionSection() {
  return (
    <>
      <div
        className="session-wrapper container my-32 pb-12  
      grid gap-10 grid-cols-[2fr_1fr] grid-rows-[3fr_2fr]"
      >
        <div className="session-name-div flex justify-between h-96 overflow-hidden pl-16">
          <div className="session-name self-center pt-5 min-w-96">
            <div className="text-xl font-bold text-yellow-400">Session: </div>
            <div className="text-xl font-bold">Coolest Session Ever</div>
          </div>
          <div className="session-img relative max-w-[400px]">
            <img
              className="h-full rounded-xl"
              src="src/assets/exampleCovers/ExampleCover5.png"
              alt="example"
            />
          </div>
        </div>

        <div className="session-participants bg-slate-900 rounded-xl p-4">
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
        <div className="session-details bg-slate-900 rounded-xl col-span-2 p-4">
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
