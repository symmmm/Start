import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Outer = () => {
  const data = {
    product: [
      {
        product_num: "1",
        product_name: "wwfggasdasdasds벨트a BLACK",
        product_price: "100,000",
        product_sale: "20",
        img_url:
          "http://m.insilence.co.kr/web/product/medium/202109/8d309f506b411c0ea1c144f28a98f0fb.jpg",
        change_url:
          "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",
      },
      {
        product_num: "2",
        product_name: "gdd BLACK",
        product_price: "4,000",
        img_url:
          "http://m.insilence.co.kr/web/product/medium/202109/8d309f506b411c0ea1c144f28a98f0fb.jpg",
        change_url:
          "http://insilence.co.kr/web/product/extra/big/202109/d09bb1754cabf0d2ec61cd19b24c73ab.jpg",
      },
      {
        product_num: "3",
        product_name: "aaasg White",
        product_price: "50,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202103/a8c11e7fb306594907b90f05906a6a9d.jpg",
        change_url:
          "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",
      },
      {
        product_name: "벨afgg",
        product_price: "100,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202108/ee32080d6abe8324645fb6008f4a46a8.jpg",
        change_url:
          "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",
      },
      {
        product_name: "g1111ACK",
        product_price: "4,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202109/89a76f66f0c0d94669e48cdf3223dc7b.jpg",
        change_url:
          "http://insilence.co.kr/web/product/extra/big/202109/d09bb1754cabf0d2ec61cd19b24c73ab.jpg",
      },
      {
        product_name: "벨트 BLACK",
        product_price: "100,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202108/ee32080d6abe8324645fb6008f4a46a8.jpg",
        change_url:
          "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",
      },
      {
        product_name: "gdd7 BLACK",
        product_price: "4,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202109/89a76f66f0c0d94669e48cdf3223dc7b.jpg",
        change_url:
          "http://insilence.co.kr/web/product/extra/big/202109/d09bb1754cabf0d2ec61cd19b24c73ab.jpg",
      },
    ],
  };

  return (
    <div className="test">
      <Row>
        {data.product.map((aaa, index) => (
          <Col xs={12} md={6} key={index}>
            <Link to={`/detail/${aaa.product_num}`}>
              <div className="P_CARD">
                <img className="P_Image" src={aaa.img_url}></img>
                <strong className="P_name">{aaa.product_name}</strong>
                <div className="P_name">
                  KRW {aaa.product_price}
                  <span className="sale"> {aaa.product_sale}%</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Outer;
