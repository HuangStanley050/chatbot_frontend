import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import CardInfo from "./CardInfo";

const Dialog = props => {
  // const {
  //   header,
  //   description,
  //   price,
  //   link,
  //   image
  // } = props.card.structValue.fields;
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
        <CardInfo {...props.card[0].structValue.fields} />
      )}
    </InputGroup>
  );

  //const CardResponse = <CardInfo />;

  // if (props.card) {
  //   console.log(props.card[0].structValue.fields.header.stringValue);
  // }

  return (
    <React.Fragment>
      {props.speaks === "user" ? user : AI}
      <br />
    </React.Fragment>
  );
};

export default Dialog;
