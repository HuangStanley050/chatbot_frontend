import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";
import CardInfo from "./CardInfo";
import QuickReplies from "./QuickReplies";

const Dialog = props => {
  let Response;

  const botReply = props => {
    if (props.card) {
      Response = (
        <div
          style={{
            overflow: "auto",

            overflowX: "scroll",
            width: "100%"
          }}
        >
          <div style={{display: "flex"}}>
            {props.card.map((info, i) => (
              <CardInfo info={info} key={i} />
            ))}
          </div>
        </div>
      );
    } else if (props.quickReply) {
      Response = <QuickReplies quick={props.quickReply} />;
    } else {
      Response = (
        <div style={{width: "100%"}}>
          <Card body inverse color="primary">
            <CardBody>
              <CardTitle>
                <span style={{backgroundColor: "white", color: "black"}}>
                  <i className="fas fa-robot" />
                  Bot
                </span>
              </CardTitle>
              <CardText>{props.text}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return Response;
  };

  const user = (
    <div style={{width: "100%"}}>
      <Card body inverse color="danger">
        <CardBody>
          <CardTitle>
            <span style={{backgroundColor: "white", color: "blue"}}>
              <i className="fas fa-user" />
              You
            </span>
          </CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );

  const AI = <InputGroup>{botReply(props)}</InputGroup>;

  return (
    <React.Fragment>
      {props.speaks === "user" ? user : AI}
      <br />
    </React.Fragment>
  );
};

export default Dialog;
