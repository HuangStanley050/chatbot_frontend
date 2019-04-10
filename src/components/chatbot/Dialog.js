import React from "react";
import { InputGroup, InputGroupAddon, Input, CardDeck } from "reactstrap";
import CardInfo from "./CardInfo";

const Dialog = props => {
  let Cards;

  if (props.card) {
    Cards = (
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
  } else {
    Cards = null;
  }

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
  const AI = (
    <InputGroup>
      {!props.card ? (
        <React.Fragment>
          <Input disabled={true} value={props.text} />
          <InputGroupAddon addonType="append">
            <span className="input-group-text">
              <i className="fas fa-robot" />
            </span>
          </InputGroupAddon>
        </React.Fragment>
      ) : (
        Cards
      )}
    </InputGroup>
  );

  return (
    <React.Fragment>
      {props.speaks === "user" ? user : AI}
      <br />
    </React.Fragment>
  );
};

export default Dialog;
