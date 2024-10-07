import React, { useState } from 'react';
// import './App.css';

type TMasters = {
  masters: string[];
  handleAdd: Function;
  handleDelete: Function;
};

const Masters = ({ masters, handleAdd, handleDelete }: TMasters) => {
  if (!masters.length) {
    return <div></div>;
  }
  return (
    <>
      <h2>Masters</h2>
      <ul>
        {masters.map((name: string, idx: number) => {
          return (
            <li key={idx}>
              {name}
              <button onClick={() => handleAdd(name)}>Add</button>
              <button onClick={() => handleDelete(name)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

type TPlayers = {
  players: string[];
};

const Players = ({ players }: TPlayers) => {
  if (!players.length) {
    return <div></div>;
  }
  return (
    <>
      <h2>Players</h2>
      <ul>
        {players.map((name: string, idx: number) => {
          return <li key={idx}>{name}</li>;
        })}
      </ul>
    </>
  );
};

function MastersPlayers() {
  const [name, setName] = useState('');
  const [masters, setMasters] = useState<string[]>([]);
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddName = () => {
    if (!name) return
    if (masters.includes(name)) return;
    setMasters([...masters, name]);
    setName('');
  };

  const handleAddPlayer = (val: string) => {
    if (players.includes(val)) return;
    setPlayers([...players, val]);
  };

  const handleDeletePlayer = (val: string) => {
    setPlayers(players.filter((player) => player !== val));
  };

  return (
    <>
      <h2>Masters and Players</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Add</button>
      <Masters
        masters={masters}
        handleAdd={handleAddPlayer}
        handleDelete={handleDeletePlayer}
      />
      <Players players={players} />
    </>
  );
}

export default MastersPlayers;
