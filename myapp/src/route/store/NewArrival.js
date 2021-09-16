import React from "react";
import styled from "styled-components";

const Product_page = styled.div`
  //margin-top: 20px;
  margin: 10px auto 0px auto;
  display: block;
  width: 1110px;
  padding: auto;
  //flex-wrap: wrap;
  //align-items: center;
  //justify-content: center;
  text-align: left;
  //border: 1px solid #444444;
`;

const Change_ProductImg = styled.img`
  width: 264px;
  height: 399px;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  display: none;
  top: 0px;
  left: 0px;
  //border: 1px solid #444444;
`;

const ProductImg = styled.img`
  width: 264px;
  height: 399px;
  margin-right: auto;
  margin-left: auto;
  //border: 1px solid #444444;
`;
const ProductBox = styled.div`
  margin: 5px;
  width: 266px;
  height: 450px;
  cursor: pointer;
  //border: 1px solid #444444;
  position: relative;
  display: inline-block;
  &:hover {
    ${Change_ProductImg} {
      display: block;
    }
  }
`;
const ProductTitle = styled.div`
  //border-top: 1px solid #444444;
  width: 266px;
  height: 51px;
  margin-bottom: auto;
  //border: 1px solid #444444;
`;

const NewArrival = () => {
  const data = {
    product: [
      {
        product_name: "벨트 BLACK",
        product_price: "100,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202108/ee32080d6abe8324645fb6008f4a46a8.jpg",
        change_url:
          "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",
      },
      {
        product_name: "gdd BLACK",
        product_price: "4,000",
        img_url:
          "http://insilence.co.kr/web/product/extra/big/202109/89a76f66f0c0d94669e48cdf3223dc7b.jpg",
        change_url:
          "http://insilence.co.kr/web/product/extra/big/202109/d09bb1754cabf0d2ec61cd19b24c73ab.jpg",
      },
      {
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
    ],
  };

  console.log(data.product);
  return (
    <Product_page>
      {data.product.map((aaa, index) => (
        <ProductBox key={index}>
          <ProductImg src={aaa.img_url} />
          <Change_ProductImg src={aaa.change_url} />
          <ProductTitle>
            {aaa.product_name}
            <p>{aaa.product_price} | SOLD OUT</p>
          </ProductTitle>
        </ProductBox>
      ))}
    </Product_page>
  );
};

export default NewArrival;
