
export default () => {
  return (
    <div className="chess-loader-container">
      <div className="chess-loader">
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
