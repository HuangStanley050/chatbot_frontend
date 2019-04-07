import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {
  start_event_query,
  start_text_query
} from "../../store/actions/botActions";
import { record_user_msg } from "../../store/actions/userActions";
import { connect } from "react-redux";

class ChatBot extends Component {
  // componentDidMount() {
  //   this.props.sendEnquiry({ text: "Where is Snoopy?" });
  // }
  state = {
    userInput: ""
  };

  inputHandler = e => {
    this.setState({ userInput: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    //alert("submitted!!");
    this.props.recordMsg(this.state.userInput);
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
    recordMsg: msg => dispatch(record_user_msg(msg))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatBot);
