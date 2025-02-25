import React, { useState } from 'react';

function Form1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Name"/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form1;