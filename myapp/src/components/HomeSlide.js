import React from "react";
import { Col, Row } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeSlide = () => {
  return (
    <Row>
      <Col xs={24} md={6}></Col>
      <Col xs={24} md={12}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
        >
          <div>
            <img
              src="https://w.namu.la/s/bbff81cb4fd4d3f97d245a28a360b5cb665745b2cb434287f9cbd3423978919ce5377ef034f150277564c1798660ae95825fe2bfda50baa970f97d999a81c3148ed215124e7eac555c5699618f8e1d03"
              alt="profile"
            />
          </div>
          <div>
            <img
              src="http://app-storage-edge-003.cafe24.com/bannermanage2/insilence1/2021/08/13/c54298e7a11447a3ea8e078c9c2e4184.jpg"
              alt="profile"
            />
          </div>
          <div>
            <img
              src="https://w.namu.la/s/bbff81cb4fd4d3f97d245a28a360b5cb665745b2cb434287f9cbd3423978919ce5377ef034f150277564c1798660ae95825fe2bfda50baa970f97d999a81c3148ed215124e7eac555c5699618f8e1d03"
              alt="profile"
            />
          </div>
        </Carousel>
      </Col>
      <Col xs={24} md={6}></Col>
    </Row>
  );
};

export default HomeSlide;
