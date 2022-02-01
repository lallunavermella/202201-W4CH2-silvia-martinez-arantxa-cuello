const Hangman = ({ usedLetters }) => {
  return (
    <div className="hangman-container">
      <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
        {usedLetters.length >= 1 && (
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        )}
        {usedLetters.length >= 2 && (
          <line class="stage2" x1="24" y1="80" x2="24" y2="16"></line>
        )}
        {usedLetters.length >= 3 && (
          <line class="stage3" x1="21" y1="16" x2="60" y2="16"></line>
        )}
        {usedLetters.length >= 4 && (
          <line class="stage4" x1="24" y1="24" x2="32" y2="16"></line>
        )}
        {usedLetters.length >= 5 && (
          <line class="stage5" x1="56" y1="16" x2="56" y2="28"></line>
        )}
        {usedLetters.length >= 6 && (
          <circle
            className="stage6"
            cx="56"
            cy="34"
            r="6"
            fill="#bee5eb"
          ></circle>
        )}
        {usedLetters.length >= 7 && (
          <line class="stage7" x1="56" y1="40" x2="56" y2="56"></line>
        )}
        {usedLetters.length >= 8 && (
          <line class="stage8" x1="44" y1="46" x2="56" y2="40"></line>
        )}
        {usedLetters.length >= 9 && (
          <line class="stage9" x1="68" y1="46" x2="56" y2="40"></line>
        )}
        {usedLetters.length >= 10 && (
          <line class="stage10" x1="50" y1="70" x2="56" y2="56"></line>
        )}
        {usedLetters.length >= 11 && (
          <line class="stage11" x1="62" y1="70" x2="56" y2="56"></line>
        )}
      </svg>
    </div>
  );
};

export default Hangman;
