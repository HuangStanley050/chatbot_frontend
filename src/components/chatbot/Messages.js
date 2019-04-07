import React from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";

const Messages = props => {
  return (
    <div>
      {props.messages.map((message, index) => {
        //let whospeaks=null;

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

const mapStateToProps = state => {
  return {
    // userMsg: state.bot.userMessages,
    // botMsg: state.bot.botMessages,
    messages: state.bot.messages,
    whospeaks: state.bot.whospeaks
  };
};

export default connect(mapStateToProps)(Messages);
