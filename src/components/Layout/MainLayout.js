import React from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from 'prop-types'

const MainLayout = ({ children, col = 6, margin = 5, order = 6 }) => {
  return (
    <Container fluid>
      <div className="row d-flex justify-content-center">
        <div className={classNames(`col-${col} m-${margin} order-${order}`)}>
          {children}
        </div>
      </div>
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  col: PropTypes.number,
  order: PropTypes.number,
}

export default MainLayout;
