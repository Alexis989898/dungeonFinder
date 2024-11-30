function SessionSection() {
  return (
    <>
      <div className="session-wrapper">
        <div className="session-name-div">
          <div className="session-name">Test Session</div>
        </div>
        <div className="session-details">
          <div>Session details</div>
          <div className="details-wrapper">
            <h2>Session Details</h2>
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
        <div className="session-participants"></div>
      </div>
    </>
  );
}

export default SessionSection;
