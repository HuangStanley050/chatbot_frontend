import React from "react";

import Dialog from "./Dialog";

const Messages = props => {
  return (
    <div style={{ marginTop: "4rem" }}>
      {props.messages.map((message, index) => {
        return (
          <Dialog
            speaks={message.hasOwnProperty("who") ? "user" : "AI"}
            key={index}
            text={message.hasOwnProperty("payload") ? null : message.text.text}
            card={
              message.hasOwnProperty("payload") && message.payload.fields.cards
                ? message.payload.fields.cards.listValue.values
                : null
            }
            quickReply={
              message.hasOwnProperty("payload") &&
              message.payload.fields.quick_replies
                ? message.payload.fields
                : null
            }
          />
        );
      })}
    </div>
  );
};

export default Messages;
