import React from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

/*

<InputGroup>
        <InputGroupAddon addonType="prepend">You</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">AI</InputGroupAddon>
      </InputGroup>


*/

const Messages = props => {
  return (
    <div>
      {props.userMsg.map((msg, index) => {
        return (
          <React.Fragment key={index}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">You</InputGroupAddon>
              <Input />
            </InputGroup>
            <br />
          </React.Fragment>
        );
      })}
      {props.botMsg.map((msg, index) => {
        return (
          <React.Fragment key={index}>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">AI</InputGroupAddon>
            </InputGroup>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userMsg: state.bot.userMessages,
    botMsg: state.bot.botMessages
  };
};

export default connect(mapStateToProps)(Messages);
