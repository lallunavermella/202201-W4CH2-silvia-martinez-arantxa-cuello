// props = { word: "ESPIA" }

// let {word} = props
// let word = props.word

const Guessword = ({ word }) => {
  const letters = word.split("");

  return (
    <ul className="guess-letters">
      {letters.map((letter) => (
        <li className="guess-letter empty"></li>
      ))}
    </ul>
  );
};

export default Guessword;
