import React, { useContext } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductPageContext } from '../../context/ProductPageContext';

const NavBar = () => {
  const { state, dispatch } = useContext(ProductPageContext);

  console.log(state.cart.length);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </Nav>
          <Dropdown className="d-flex">
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
              <strong>{state.cart.length}</strong> Cart Items
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-3">
              <Col md={12}>
                <Row>
                  {state.cart &&
                    state.cart.map((el) => {
                      return (
                        <Col md={12} key={el.id} className="mb-3">
                          <Card>
                            {/* <Card.Img variant="top" src={el.thumbnail} /> */}
                            <Card.Body>
                              <Card.Text>
                                <strong>{el.title}</strong>
                                <br /> ${el.price}
                              </Card.Text>

                              {/* {state.cart.find((p) => p.id === el.id) ? (
                                <Button
                                  variant="danger"
                                  onClick={() => removeProductHandler(el.id)}
                                >
                                  Remove from cart
                                </Button>
                              ) : (
                                <Button
                                  variant="primary"
                                  onClick={() => addProductHandler(el.id)}
                                >
                                  Add to cart
                                </Button>
                              )} */}
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Col>
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
