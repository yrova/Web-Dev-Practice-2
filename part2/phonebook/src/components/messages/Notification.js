import React from "react";

const Notification = ({ message }) => {
  if (message === null || message.message === null || message.type === null) {
    return null;
  }

  // Change css based on style type:  Type: True = Green Box, False = Red Box
  const styleType = message.type ? notificationStyle : errorStyle;

  return (
    <div className="error" style={styleType}>
      {message.message}
    </div>
  );
};

const notificationStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const errorStyle = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

export default Notification;
