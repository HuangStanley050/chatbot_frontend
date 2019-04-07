import React, { Component } from "react";
import { InputGroup, Input } from "reactstrap";
import {
  start_event_query,
  start_text_query
} from "../../store/actions/botActions";
import { record_user_msg } from "../../store/actions/userActions";
import { connect } from "react-redux";
import Messages from "./Messages";

class ChatBot extends Component {
  componentDidMount() {
    this.props.sendEvent({ event: "Welcome" });
  }

  state = {
    userInput: ""
  };

  inputHandler = e => {
    this.setState({ userInput: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    //alert("submitted!!");
    this.props.recordMsg({ text: { text: this.state.userInput }, who: "user" });
    this.props.sendEnquiry({ text: this.state.userInput });
    this.setState({ userInput: "" });
  };

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
          <Messages />
          <form
            style={{ position: "absolute", bottom: "0", width: "100%" }}
            onSubmit={this.submitHandler}
          >
            <InputGroup>
              <Input
                value={this.state.userInput}
                onChange={this.inputHandler}
                placeholder="Enter your enquiry"
              />
            </InputGroup>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendEnquiry: query => dispatch(start_text_query(query)),
    sendEvent: eventquery => dispatch(start_event_query(eventquery)),
    recordMsg: msg => dispatch(record_user_msg(msg))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatBot);
