import "./App.css";
import UsedLetters from "./components/Usedletters/Usedletters";
import Guessword from "./components/Guessword/Guessword";
import Hangman from "./components/Hangman/Hangman";
import Wordarray from "./components/Wordarray/Wordarray";

function App() {
  const word = "ESPIA";

  const usedLetters = ["C", "D"];


  return (
    <div className="App">
      <Hangman />
      <Guessword word={word} />
      <section className="used-letters-container">
        <UsedLetters letters={usedLetters} />
      </section>
      <section className="game-result">You're dead!</section>;
      <Wordarray />
    </div>
  );
}

export default App;
