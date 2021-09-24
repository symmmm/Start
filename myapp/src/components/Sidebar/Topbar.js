import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
const Topbar = () => {
  return (
    <div className="topbar">
      <Row>
        <Col xs={24} md={24}>
          <Link to="/store/Newarrival" className="topmenu">
            NewArrival{" "}
          </Link>
          <Link to="/store/outer" className="topmenu">
            {" "}
            outer
          </Link>
          <Link to="/store/top" className="topmenu">
            {" "}
            top
          </Link>
          <Link to="/store/pants" className="topmenu">
            {" "}
            pants
          </Link>
          <Link to="/store/Accessories" className="topmenu">
            {" "}
            Accessories
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
