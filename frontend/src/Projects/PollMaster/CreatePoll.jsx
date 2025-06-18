import React from 'react';

function CreatePoll() {
  return (
    <form className="max-w-md mx-auto p-6 mt-10 bg-slate-800 rounded-lg shadow-lg text-white space-y-6">
      <h1 className="text-2xl font-bold text-center">Create Poll</h1>

      <div>
        <label className="block text-sm font-medium mb-1">Question</label>
        <input
          type="text"
          placeholder="Enter your question"
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Options</label>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Option 1"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Option 2"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Option 3"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Option 4"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
      >
        Create Poll
      </button>
    </form>
  );
}

export default CreatePoll;
