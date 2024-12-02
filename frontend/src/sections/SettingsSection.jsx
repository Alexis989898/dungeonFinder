import React from "react";

function SettingsSection() {
  return (
    <div className="settings-section mt-32 mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-8">
      {/* Settings Header */}
      <div className="settings-header bg-slate-900 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-400">Settings</h1>
        <p className="text-sm text-gray-400 mt-2">
          Manage your account preferences and privacy settings.
        </p>
      </div>

      {/* Preferences Section */}
      <div className="preferences-section mt-8 bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white mb-2">Language</label>
            <select className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Notifications</label>
            <select className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline">
              <option value="all">All Notifications</option>
              <option value="mentions">Only Mentions</option>
              <option value="none">No Notifications</option>
            </select>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg font-bold hover:bg-yellow-300 transition">
          Save Preferences
        </button>
      </div>

      {/* Privacy Settings Section */}
      <div className="privacy-section mt-8 bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Privacy</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-sm text-white">Profile Visibility</label>
            <select className="px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline">
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-white">Allow Messages</label>
            <select className="px-4 py-2 rounded-lg bg-slate-800 text-white custom-outline">
              <option value="anyone">Anyone</option>
              <option value="friends">Friends Only</option>
              <option value="none">No One</option>
            </select>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg font-bold hover:bg-yellow-300 transition">
          Save Privacy Settings
        </button>
      </div>

      {/* Danger Zone */}
      <div className="danger-zone mt-8 bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-red-500 mb-4">Danger Zone</h2>
        <p className="text-sm text-gray-400 mb-4">
          Deleting your account will permanently erase all your data. This
          action cannot be undone.
        </p>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-400 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default SettingsSection;
