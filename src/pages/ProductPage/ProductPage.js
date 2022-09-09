import React, { useReducer, useEffect, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'react-bootstrap';
import { DummyProducts_ApiUrl } from '../../helpers/config';
import { getJson } from '../../helpers/helperFn';
import { ProductPageContext } from '../../context/ProductPageContext';

import {
  ACTIONS_TYPE,
  ProductPageReducer,
  iState,
} from '../../reducer/ProductPageReducer';
import './ProductPage.scss';

const ProductPage = () => {
  const { state, dispatch } = useContext(ProductPageContext);
  // const [state, dispatch] = useReducer(ProductPageReducer, iState);

  useEffect(() => {
    dispatch({
      type: ACTIONS_TYPE.FETCH_START,
    });
    (async () => {
      try {
        const data = await getJson(DummyProducts_ApiUrl);
        dispatch({
          type: ACTIONS_TYPE.FETCH_SUCCESS,
          payload: data.products,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS_TYPE.FETCH_ERROR,
          payload: err,
        });
      }
    })();
  }, []);

  // console.log(state);

  return (
    <section className="product-page py-5">
      <Container>
        <Row>
          <Col md={2}>
            <p>Products</p>
          </Col>
          <Col md={10}>
            <Row>
              {state.isLoading ? (
                <p>Please wait while content has been loaded...</p>
              ) : state.error ? (
                <p>{state.error}</p>
              ) : (
                <Row>
                  {state.products &&
                    state.products.map((el) => {
                      return (
                        <Col md={4} key={el.id} className="mb-3">
                          <Card>
                            {/* <Card.Img variant="top" src={el.thumbnail} /> */}
                            <Card.Body>
                              <Card.Title>{el.title}</Card.Title>
                              <Card.Text>${el.price}</Card.Text>
                              <Button variant="primary">Add to cart</Button>
                              <Button variant="danger">Remove from cart</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductPage;
