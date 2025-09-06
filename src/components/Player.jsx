import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required defaultValue={playerName} onChange={handleChange}/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-simbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
