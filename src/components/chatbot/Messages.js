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
            text={message.hasOwnProperty("payload") ? null : message.text.text}
            card={
              message.hasOwnProperty("payload")
                ? message.payload.fields.cards.listValue.values
                : null
            }
          />
        );
      })}
    </div>
  );
};

export default Messages;
