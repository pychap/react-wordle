import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter 5 letters.");
      return;
    }

    console.log({ guess });

    setGuess("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          maxLength={5}
          minLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            const userInput = e.target.value.toUpperCase();
            setGuess(userInput);
          }}
        />
      </form>

      <p>
        <strong>Current guess:</strong>
        <br />
        {guess || "(empty)"}
      </p>
    </>
  );
}

export default GuessInput;
