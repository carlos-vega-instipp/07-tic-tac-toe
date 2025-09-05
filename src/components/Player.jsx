export default function Player({name, symbol}) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-simbol">{symbol}</span>
        <button>Edit</button>
      </span>
    </li>
  );
}
