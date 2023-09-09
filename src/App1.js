import React, { useState } from 'react';
import Counter from './Counter';
import './style.css';

export default function App1() {
  const [inp, setInp] = useState({ firstName: '', lastName: '' });
  const handleChangeName = (e) => {
    setInp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { firstName, lastName } = inp;

  const fullName = firstName + lastName;

  return (
    <>
      <form>
        <label htmlFor="firstName">firstName</label>
        <input name="firstName" value={firstName} onChange={handleChangeName} />
        <br />
        <br />
        <label htmlFor="lastName">lastName</label>
        <input name="lastName" value={lastName} onChange={handleChangeName} />
        <br />
        <br />
        firstName:{firstName}
        <br />
        <br />
        lastName: {lastName}
        <br />
        <br />
        fullName: {fullName}
      </form>

      <Counter />
    </>
  );
}
