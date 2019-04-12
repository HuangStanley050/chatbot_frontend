import React from "react";
import { Card, CardTitle, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  start_text_query,
  start_event_query
} from "../../store/actions/botActions";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const QuickReplies = props => {
  //console.log(props.quick);

  const handleClick = (response, payload) => {
    //console.log(payload);
    if (response === "more info") {
      return;
    } else if (payload === "training_masterclass") {
      props.sendEventReply({
        event: "MASTERCLASS",
        userID: cookies.get("userID")
      });
    } else {
      props.sendQuickReply({ text: response, userID: cookies.get("userID") });
    }
  };

  const response = (
    <div style={{ width: "100%" }}>
      <Card body inverse color="info">
        <CardTitle>{props.quick.text.stringValue}</CardTitle>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.quick.quick_replies.listValue.values.map((msg, i) => (
            <a
              key={i}
              target="_blank"
              href={
                msg.structValue.fields.link
                  ? "http://" + msg.structValue.fields.link.stringValue
                  : null
              }
            >
              <Button
                onClick={() =>
                  handleClick(
                    msg.structValue.fields.text.stringValue,
                    msg.structValue.fields.payload.stringValue
                  )
                }
              >
                {msg.structValue.fields.text.stringValue}
              </Button>
            </a>
          ))}
        </div>
      </Card>
    </div>
  );

  return response;
};

const mapDispatchToProps = dispatch => {
  return {
    sendQuickReply: answer => dispatch(start_text_query(answer)),
    sendEventReply: response => dispatch(start_event_query(response))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QuickReplies);
