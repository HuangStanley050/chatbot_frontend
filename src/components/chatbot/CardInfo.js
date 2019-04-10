import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardInfo = props => {
  console.log(props);
  return (
    <div>
      <Card>
        <CardImg
          style={{height:'200px'}}
          top
          width="100%"
          src="http://placehold.jp/150x150.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.header.stringValue}</CardTitle>
          <CardSubtitle>{props.description.stringValue}</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardInfo;
