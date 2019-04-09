import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const Dialog = props => {
  const user = (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <span className="input-group-text">
          <i class="fas fa-user" />
        </span>
      </InputGroupAddon>
      <Input disabled={true} value={props.text} />
    </InputGroup>
  );
  const AI = (
    <InputGroup>
      <Input disabled={true} value={props.text} />
      <InputGroupAddon addonType="append">
        <span className="input-group-text">
          <i class="fas fa-robot" />
        </span>
      </InputGroupAddon>
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
