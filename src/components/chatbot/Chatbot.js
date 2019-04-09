import React, { Component } from "react";
import { InputGroup, Input } from "reactstrap";
import Cookies from "universal-cookie";
import {
  start_event_query,
  start_text_query
} from "../../store/actions/botActions";
import { record_user_msg } from "../../store/actions/userActions";
import { connect } from "react-redux";
import Messages from "./Messages";

//style={{ position: "absolute", bottom: "0", width: "100%" }}

const cookies = new Cookies();
class ChatBot extends Component {
  componentDidMount() {
    this.props.sendEvent({ event: "Welcome", userID: cookies.get("userID") });
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
    this.props.sendEnquiry({
      text: this.state.userInput,
      userID: cookies.get("userID")
    });
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
          <Messages messages={this.props.messages} />
          <div
            //style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          />
          <form onSubmit={this.submitHandler}>
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

const mapStateToProps = state => {
  return {
    messages: state.bot.messages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBot);
