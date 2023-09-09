import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullNme = firstName + lastName

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <form>
      <label htmlFor="firstName">firstName</label>
      <input name="firstName" value={firstName} onChange={handleFirstName} />
      <br />
      <br />
      <label htmlFor="lastName">lastName</label>
      <input name="lastName" value={lastName} onChange={handleLastName} />
      <br />
      <br />
      firstName:{firstName}
      <br />
      <br />
      lastName: {lastName}
      <br />
      <br />
      fullName: {fullNme}
    </form>
  );
}
