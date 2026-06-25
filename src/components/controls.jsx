function Controls({ onChangeMode }) {
  console.log("Controls render");
  return (
    <div className="menu">
      <button
        className="btn btn-primary"
        onClick={() => {
          onChangeMode();
        }}
      >
        Create
      </button>
    </div>
  );
}
export default Controls;
