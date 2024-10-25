export default function IconButton({ icon, handleClick }) {
  return (
    <button onClick={handleClick} className="icon-button">
      {icon}
    </button>
  );
}
