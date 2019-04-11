import React from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";

// <InputGroup>
//       <Input disabled={true} value={props.quick.text.stringValue} />
//       <div>
//         {props.quick.quick_replies.listValue.values.map((msg, i) => (
//           <span key={i}>{msg.structValue.fields.text.stringValue}</span>
//         ))}
//       </div>
//       <InputGroupAddon addonType="append">
//         <span className="input-group-text">
//           <i className="fas fa-robot" />
//         </span>
//       </InputGroupAddon>
//     </InputGroup>

const QuickReplies = props => {
  //console.log(props.quick);

  const response = (
    <div>
      <Card body inverse color="info">
        <CardTitle>{props.quick.text.stringValue}</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.quick.quick_replies.listValue.values.map((msg, i) => (
            <Button key={i}>{msg.structValue.fields.text.stringValue}</Button>
          ))}
        </div>
      </Card>
    </div>
  );

  return response;
};

export default QuickReplies;
