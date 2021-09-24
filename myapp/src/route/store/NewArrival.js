import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Sidebar/Topbar";

const Product_page = styled.div`
  //margin-top: 20px;
  margin: 10px auto 10px auto;
  display: block;
  max-width: 1650px;
  width: max-content;
  //padding: auto;
  //flex-wrap: wrap;
  //align-items: center;
  justify-content: center;
  //text-align: center;
  //border: 1px solid #444444;
  @media screen and (max-width: 768px) {
    width: auto;
    text-align: center;
    //padding-left: 25px;
  }
`;

const Change_ProductImg = styled.img`
  width: 390px;
  height: 500px;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  display: none;
  top: 0px;
  left: 0px;
  // border: 1px solid #444444;
`;

const ProductImg = styled.img`
  //border: 1px solid #444444;
  width: 390px;
  height: 500px;
  margin-right: auto;
  margin-left: auto;
`;
const ProductTitle = styled.div`
  width: 266px;
  height: 51px;
  margin-bottom: auto;
  //border: 1px solid #444444;
`;
const ProductBox = styled.div`
  //border: 1px solid #444444;
  //margin-left: auto;
  //margin-top: 10px;
  width: 400px;
  height: 600px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  &:hover {
    ${Change_ProductImg} {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    //width: 170px;
    max-width: 46%;
    width: auto;
    height: auto;
    ${ProductImg} {
      max-width: 100%;
      height: auto;
    }
    ${Change_ProductImg} {
      max-width: 100%;
      height: auto;
    }
    ${ProductTitle} {
      font-size: 0.7rem;
      width: auto;
      height: auto;
    }
  }
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

  console.log(data.product);
  return (
    <Product_page>
      <Topbar />
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
