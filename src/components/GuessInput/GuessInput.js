import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter 5 letters.");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(e) => {
            const userInput = e.target.value.toUpperCase();
            setTentativeGuess(userInput);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
