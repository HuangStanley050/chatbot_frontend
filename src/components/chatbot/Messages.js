import React from "react";

import Dialog from "./Dialog";

const Messages = props => {
  return (
    <div>
      {props.messages.map((message, index) => {
        return (
          <Dialog
            speaks={message.hasOwnProperty("who") ? "user" : "AI"}
            key={index}
            text={message.text.text}
          />
        );
      })}
    </div>
  );
};

export default Messages;
