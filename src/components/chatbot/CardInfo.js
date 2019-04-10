import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const CardInfo = props => {
  //console.log(props.info.structValue.fields);
  return (
    <div>
      <Card
        body
        style={{ display: "inline-block", width: "300px" }}
        inverse
        color="primary"
      >
        <CardImg
          top
          style={{ width: "200px", height: "200px" }}
          src="http://placehold.jp/150x150.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            {props.info.structValue.fields.header.stringValue}
          </CardTitle>

          <CardText>
            {props.info.structValue.fields.description.stringValue}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardInfo;
