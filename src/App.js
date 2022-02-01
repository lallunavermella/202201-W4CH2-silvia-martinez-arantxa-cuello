import "./App.css";
import UsedLetters from "./components/Usedletters/Usedletters";
import Guessword from "./components/Guessword/Guessword";
import Hangman from "./components/Hangman/Hangman";
import Wordarray from "./components/Wordarray/Wordarray";

function App() {
  return (
    <div className="App">
      <Hangman />
      <Guessword />
      <section class="used-letters-container">
        <h2>Used letters</h2>
        <UsedLetters />
      </section>
      <section class="game-result">You're dead!</section>;
      <Wordarray />
    </div>
  );
}

export default App;
