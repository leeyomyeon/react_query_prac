import React from 'react';
import Header from 'pages/components/Header';
import ActiveTabs from 'pages/components/ActiveTabs';
import Menu from 'pages/components/Menu';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={2}>
          <Menu />
        </Col>
        <Col xs={12} md={8}>
          <ActiveTabs />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
