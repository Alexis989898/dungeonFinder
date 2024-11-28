function ForumTopic(props) {
    return (
      <div className="forum-topic bg-slate-900 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-yellow-400">{props.title}</h3>
        <p className="text-sm text-gray-400">{props.description}</p>
        <div className="text-xs text-gray-500 mt-2">
          {props.posts} posts · Last updated: {props.lastUpdated}
        </div>
      </div>
    );
  }
  
  export default ForumTopic;
  