import React, { useState } from 'react';

const Submit = () => {
  const [username, setUsername] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Name cannot be empty!');
      setSubmittedName('');
    } else {
      console.log(username);
      setSubmittedName(username);
      setError('');
      setUsername('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={submitHandler} 
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-emerald-600">Enter Your Name</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type your name..."
          className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full mt-4 px-4 py-3 text-white text-xl font-semibold bg-emerald-600 rounded-lg hover:bg-emerald-700 transition transform hover:scale-105"
        >
          Submit
        </button>
        {submittedName && (
          <div className="mt-4 p-3 bg-emerald-100 text-emerald-700 rounded text-center">
            Thank you, <span className="font-bold">{submittedName}</span>! 🎉
          </div>
        )}
      </form>
    </div>
  );
};

export default Submit;
