import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {
  InputGroup,
  Input,
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup
} from "reactstrap";
import Cookies from "universal-cookie";
import {
  start_event_query,
  start_text_query
} from "../../store/actions/botActions";
import {record_user_msg} from "../../store/actions/userActions";
import {connect} from "react-redux";
import Messages from "./Messages";

//style={{ position: "absolute", bottom: "0", width: "100%" }}

const cookies = new Cookies();

class ChatBot extends Component {
  componentDidMount() {
    this.props.sendEvent({event: "Welcome", userID: cookies.get("userID")});
    if (window.location.pathname === "/shop" && !this.state.shopWelcomeSent) {
      //console.log(window.location.pathname);
      this.props.sendEvent({
        event: "WELCOME_SHOP",
        userID: cookies.get("userID")
      });
      this.setState({shopWelcomeSent: true});
    }
    this.props.history.listen(() => {
      //console.log("listening")
      if (
        this.props.history.location.pathname === "/shop" &&
        !this.state.shopWelcomeSent
      ) {
        this.props.sendEvent({
          event: "WELCOME_SHOP",
          userID: cookies.get("userID")
        });
        this.setState({shopWelcomeSent: true});
      }
    });
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
  }

  state = {
    userInput: "",
    showBot: true,
    shopWelcomeSent: false
  };

  inputHandler = e => {
    this.setState({userInput: e.target.value});
  };

  submitHandler = e => {
    e.preventDefault();
    //alert("submitted!!");
    this.props.recordMsg({text: {text: this.state.userInput}, who: "user"});
    this.props.sendEnquiry({
      text: this.state.userInput,
      userID: cookies.get("userID")
    });
    this.setState({userInput: ""});
  };

  showBotHander = e => {
    this.setState({showBot: !this.state.showBot});
  };

  render() {
    const openBot = "400px";
    const closeBot = "50px";
    const botStatus = this.state.showBot ? openBot : closeBot;
    const chatBotStyle = {
      position: "fixed",
      right: "0",
      bottom: "0",
      height: botStatus,
      width: "400px",
      //border: "5px solid red",
      backgroundColor: "white"
    };
    return (
      <div style={chatBotStyle}>
        <div
          id="chatbot"
          style={{
            height: "100%",
            width: "100%",
            overflow: "auto"
          }}
        >
          <Navbar
            style={{
              backgroundColor: "gray",
              position: "absolute",
              top: "0",
              width: "100%",
              zIndex: "200"
            }}
          >
            <NavbarBrand>ChatBot</NavbarBrand>
            <Nav navbar>
              <ButtonGroup>
                <Button
                  disabled={!this.state.showBot ? true : false}
                  onClick={this.showBotHander}
                  color="danger"
                >
                  close
                </Button>
                <Button
                  disabled={this.state.showBot ? true : false}
                  onClick={this.showBotHander}
                  color="primary"
                >
                  open
                </Button>
              </ButtonGroup>
            </Nav>
          </Navbar>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatBot)
);
