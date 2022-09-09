import React, { useReducer } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.scss';

const iState = {
  isLoading: false,
  data: [],
  error: null,
};

const Actions_Type = {
  Fetch_Start: 'Fetch_Start',
  Fetch_Success: 'Fetch_Success',
  Fetch_Error: 'Fetch_Error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions_Type.Fetch_Start:
      return { ...state, isLoading: true };
    case Actions_Type.Fetch_Success:
      return { ...state, isLoading: false, data: action.payload };
    case Actions_Type.Fetch_Error:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return { state };
  }
};

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, iState);

  const fetchContentHandler = () => {
    dispatch({
      type: Actions_Type.Fetch_Start,
    });
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: Actions_Type.Fetch_Success,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Actions_Type.Fetch_Error,
          payload: err,
        });
      });
  };

  // console.log(state);

  return (
    <Container className="py-5">
      <Row>
        <Col md={2}>
          <Button onClick={fetchContentHandler}>Fetch Content</Button>
        </Col>
        <Col md={10} className="fixed-height-300">
          {state.isLoading ? (
            <p>Please wait while content has been loaded...</p>
          ) : state.error ? (
            <p>{state.error}</p>
          ) : (
            <Row>
              {state.data &&
                state.data.map((el) => {
                  return <Col md={3}> {el.name.common} </Col>;
                })}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
