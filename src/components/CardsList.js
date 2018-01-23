import React, {Component} from 'react';
import {Card, Col} from 'reactstrap';
import {CardBody, CardImg, Row} from 'reactstrap/lib/index';
import Link from 'gatsby-link';

export default ({cards}) => {
    return (
        <Row>
          {cards.map(card => (
              <Col key={card.thumbnailSrc}>
                  <Card>
                      <CardImg top width="100%"
                               src={card.thumbnailSrc}
                               alt={card.thumbnailAltText}/>
                      <CardBody className="text-center">
                          <Link to={card.linkTo}>{card.name}</Link>
                      </CardBody>
                  </Card>
              </Col>
          ))}
        </Row>
    );
}
