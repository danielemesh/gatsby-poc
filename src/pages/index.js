import React from 'react';
import OTTCarousel from '../components/OTTCarousel';

import {
  Container, Row,
  Col,
} from 'reactstrap';
import styles from './index.module.scss';
import CardsList from '../components/CardsList';

export default ({data}) => {
  console.log(data);
  return (
      <div>
        <OTTCarousel items={data.dataJson.slides}></OTTCarousel>
        
        <Container fluid>
          <Row className={styles['product-line-up']}>
            <Col>
              <h2 className="text-center ">Shop plans, products & packages that
                fit your lifestyle</h2>
            </Col>
          </Row>
          <CardsList cards={data.dataJson.products}></CardsList>
        </Container>
      </div>
  );
}

export const query = graphql`
  query IndexQuery {
    dataJson {
      slides {
        caption
        src
        altText
    }
    products {
      thumbnailSrc
      name
      linkTo
      linkText
    }
  }
}
`;