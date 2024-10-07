import React, { useState } from 'react';

function BloodGroupForm() {
  const [fullName, setFullName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const upperFullName = (fullname: string) => {
    const name = fullname.split(' ');
    return name
      .map((el) =>
        el ? el[0]?.toUpperCase() + el.slice(1, el.length)?.toLowerCase() : ''
      )
      .join(' ');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(upperFullName(event.target.value));
  };

  const handleBloodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBloodGroup(event.target.value.toUpperCase());
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(fullName);
    console.log(bloodGroup);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <br />
          <input
            type="text"
            value={fullName}
            onChange={handleNameChange}
            placeholder="Enter Full Name"
          />
        </label>
        <label>
          <br />
          Blood Group
          <br />
          <input
            type="text"
            value={bloodGroup}
            onChange={handleBloodChange}
            placeholder="Enter Blood Group"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default BloodGroupForm;

