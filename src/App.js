import "./App.css";
import UsedLetters from "./components/Usedletters/Usedletters";
import Guessword from "./components/Guessword/Guessword";
import Hangman from "./components/Hangman/Hangman";
import Wordarray from "./components/Wordarray/Wordarray";

function App() {
  const word = "ESPIA";

  return (
    <div className="App">
      <Hangman />
      <Guessword word={word} />
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <UsedLetters />
      </section>
      <section className="game-result">You're dead!</section>;
      <Wordarray />
    </div>
  );
}

export default App;
