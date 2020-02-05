import React from "react";

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header header={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

const Content = ({ parts }) => {
  const listParts = () =>
    parts.map(part => <Part name={part.name} amount={part.exercises} />);

  return <div>{listParts()}</div>;
};

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, b) => {
    return (sum += b.exercises);
  }, 0);

  return (
    <p>
      <b>total of {sum} exercises</b>
    </p>
  );
};

const Part = ({ name, amount }) => {
  return (
    <p>
      {name} {amount}
    </p>
  );
};

export default Course;
