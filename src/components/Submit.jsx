import React, { useState } from 'react';

const Submit = () => {
  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='px-8 rounded py-3 text-xl m-5'>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter Your Name'
          className='border p-2 rounded w-full'
        />
        <button
          type="submit"
          className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submit;
