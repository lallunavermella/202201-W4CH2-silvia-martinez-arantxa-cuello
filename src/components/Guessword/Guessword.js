const Guessword = ({ word }) => {
  const letters = word.split("");

  return (
    <ul className="guess-letters">
      {letters.map((letter, index) => (
        <li className="guess-letter empty" key={index}></li>
      ))}
    </ul>
  );
};

export default Guessword;
