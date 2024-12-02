import ForumTopic from "../components/ForumTopic.jsx";

function ForumSection() {
  return (
    <>
      <div className="forum-section mt-32 mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-8">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Forum Topics</h2>
        <div className="forum-topics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example forum topics using ForumTopic component */}
          {[
            {
              title: "Best Homebrew Rules",
              description:
                "Share and discuss your favorite house rules for RPGs.",
              posts: 42,
              lastUpdated: "2 hours ago",
            },
            {
              title: "Looking for Group",
              description: "Find players or GMs for your next game session.",
              posts: 73,
              lastUpdated: "1 day ago",
            },
            {
              title: "World-Building Tips",
              description:
                "Discuss creative ideas for building immersive worlds.",
              posts: 30,
              lastUpdated: "5 hours ago",
            },
          ].map((topic, index) => (
            <ForumTopic
              key={index}
              title={topic.title}
              description={topic.description}
              posts={topic.posts}
              lastUpdated={topic.lastUpdated}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ForumSection;
