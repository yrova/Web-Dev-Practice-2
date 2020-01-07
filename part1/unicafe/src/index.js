import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  //save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = newValue => {
    setGood(newValue);
  };

  const handleNeutralClick = newValue => {
    setNeutral(newValue);
  };

  const handleBadClick = newValue => {
    setBad(newValue);
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => handleGoodClick(good + 1)} text="good" />
        <Button
          handleClick={() => handleNeutralClick(neutral + 1)}
          text="neutral"
        />
        <Button handleClick={() => handleBadClick(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = props => {
  const { good, neutral, bad } = props;
  const allClicks = good + neutral + bad;

  if (allClicks === 0) {
    return (
      <div>
        <p>No feedback givin</p>
      </div>
    );
  }

  const avg = roundedToFixed((good - bad) / allClicks, 1);
  const positive = roundedToFixed(getWholePercent(good, allClicks), 1);

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good + neutral + bad} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const Statistic = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Button = props => (
  <button onClick={props.handleClick}> {props.text}</button>
);

const roundedToFixed = (_float, _digits) => {
  var rounded = Math.pow(10, _digits);
  return (Math.round(_float * rounded) / rounded).toFixed(_digits);
};

const getWholePercent = (percentFor, percentOf) => {
  return (percentFor / percentOf) * 100;
};

ReactDOM.render(<App />, document.getElementById("root"));
