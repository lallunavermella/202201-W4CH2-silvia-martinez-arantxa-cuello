const UsedLetters = ({ letters }) => {
  return (
    <>
      <h2>Used Letters</h2>
      <div className="letters-container">
        {letters.map((letter, index) => (
          <span key={index}> {letter} </span>
        ))}
      </div>
    </>
  );
};
export default UsedLetters;
