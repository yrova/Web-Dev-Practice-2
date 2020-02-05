import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(randIndex(anecdotes.length));
  const [votes, setVote] = useState(initilizeArray(anecdotes.length));
  const [mode, setMode] = useState(-1);

  //generates random index and updates relevant state
  const handleRandomPick = () => {
    var index = randIndex(anecdotes.length);
    setSelected(index);
  };

  //add one to vote array state, also updates the mode state
  const handleVote = arr => {
    arr[selected] += 1;
    if (mode === -1) setMode(selected);
    if (arr[selected] > arr[mode]) setMode(selected);
    setVote(arr);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes </p>
      </div>
      <div>
        <Button handleClick={() => handleVote([...votes])} text="vote" />
        <Button handleClick={() => handleRandomPick()} text="next selected" />
      </div>
      <MostVotes mode={mode} votes={votes} />
    </div>
  );
};

const MostVotes = props => {
  const { mode, votes } = props;

  //if no votes were cast, display nothing
  if (mode === -1) {
    return null;
  }

  return (
    <div>
      <h1>Anecdotes with the Most Votes</h1>
      <p>{anecdotes[mode]}</p>
      <p>has {votes[mode]} votes</p>
    </div>
  );
};

//global array of prompts
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const Button = props => (
  <button onClick={props.handleClick}> {props.text}</button>
);

const initilizeArray = length => {
  return Array(length).fill(0);
};

const randIndex = n => {
  return Math.floor(Math.random() * n);
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
