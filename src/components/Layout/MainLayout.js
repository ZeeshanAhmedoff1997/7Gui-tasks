import React from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";

const MainLayout = ({ children, col = 6, margin = 5, order = 6 }) => {
  return (
    <Container fluid>
      <div className="row">
        <div className={classNames(`col-${col} m-${margin} order-${order}`)}>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default MainLayout;
