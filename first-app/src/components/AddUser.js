import React, { useState } from 'react';

export default function AddUser({ storeUser }) {
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      id: parseInt(Math.random() * 1500),
      name: name,
    };
    console.log(user);
    storeUser(user);
    setName("")
  };


  return (
    <form className='form border p-3 mb-3' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='mb-3'>Type User Name</label>
        <input
          type='text'
          value={name}
          onChange={handleName}
          className='form-control'
        />
      </div>
      <button type='submit' className='btn btn-success'>
        Add User
      </button>
    </form>
  );
}
