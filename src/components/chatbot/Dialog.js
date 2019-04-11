import React from "react";
import { InputGroup, InputGroupAddon, Input, CardDeck } from "reactstrap";
import CardInfo from "./CardInfo";

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
          <div style={{ display: "flex" }}>
            {props.card.map((info, i) => (
              <CardInfo info={info} key={i} />
            ))}
          </div>
        </div>
      );
    } else if (props.quickReply) {
      Response = <h4>This is quick Reply</h4>;
    } else {
      Response = (
        <React.Fragment>
          <Input disabled={true} value={props.text} />
          <InputGroupAddon addonType="append">
            <span className="input-group-text">
              <i className="fas fa-robot" />
            </span>
          </InputGroupAddon>
        </React.Fragment>
      );
    }
    return Response;
  };

  const user = (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <span className="input-group-text">
          <i className="fas fa-user" />
        </span>
      </InputGroupAddon>
      <Input disabled={true} value={props.text} />
    </InputGroup>
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
