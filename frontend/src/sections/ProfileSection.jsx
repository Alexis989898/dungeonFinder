import React from "react";

function ProfileSection() {



  return (
    <div className="profile-section mt-32 mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-8">
      {/* Profile Header */}
      <div className="profile-header bg-slate-900 rounded-xl p-6 shadow-lg flex items-center gap-6">
        <img
          src="src/assets/user-avatar.jpg" // Replace with the correct path to your user's avatar
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-2 border-yellow-400 object-cover"
        />
        <div className="text-white">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-sm text-gray-400">Joined: January 2024</p>
        </div>
      </div>

      {/* Account Settings */}
      <div className="account-settings mt-8 bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Account Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline"
            />
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg font-bold hover:bg-yellow-300 transition">
          Save Changes
        </button>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity mt-8 bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Recent Activity</h2>
        <ul className="space-y-4 text-white">
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
              GM
            </div>
            <p>Started a new session: *Cyberpunk Adventures*</p>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
              RP
            </div>
            <p>Joined the session: *Shadowrun Legends*</p>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
              FB
            </div>
            <p>Commented on forum topic: *World-Building Tips*</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSection;
