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
    //console.log(response);
    if (response === "more info") {
      //console.log(payload);
      window.open("http://" + payload, "_blank");
      return;
    } else if (payload === "training_masterclass") {
      props.sendEventReply({
        event: "MASTERCLASS",
        userID: cookies.get("userID")
      });
    } else if (payload === "recommend_yes") {
      props.sendEventReply({
        event: "SHOW_RECOMMENDATIONS",
        userID: cookies.get("userId")
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
          {props.quick.quick_replies.listValue.values.map((msg, i) => {
            // if (msg.structValue.fields.link) {
            //   console.log(msg.structValue.fields.link.stringValue);
            // }
            return (
              <Button
                key={i}
                onClick={() =>
                  handleClick(
                    msg.structValue.fields.text.stringValue,
                    msg.structValue.fields.payload.stringValue
                  )
                }
              >
                {msg.structValue.fields.text.stringValue}
              </Button>
            );
          })}
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
