import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {
  start_event_query,
  start_text_query
} from "../../store/actions/botActions";
import { connect } from "react-redux";

class ChatBot extends Component {
  componentDidMount() {
    this.props.sendEnquiry();
  }

  render() {
    const chatBotStyle = {
      position: "fixed",
      top: "4rem",
      right: "0",
      height: "400px",
      width: "400px",
      border: "5px solid red",
      backgroundColor: "white"
    };
    return (
      <div style={chatBotStyle}>
        <div
          id="chatbot"
          style={{ height: "100%", width: "100%", overflow: "auto" }}
        >
          <h2>ChatBot</h2>
          <InputGroup>
            <Input placeholder="username" />
          </InputGroup>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendEnquiry: () => dispatch(start_text_query())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatBot);
