import { useState, useEffect } from "react";
import { Row, Col } from "antd";
const Cart = () => {
  //const [cart, setCart] = useState([]);
  const data = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    console.log(data);
  }, []);

  const delete_cart = (value) => {
    console.log("삭제", value);
    let cartCopy = [...data];
    cartCopy = cartCopy.filter((item) => item.ID != value);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  return (
    <div>
      <Row>
        <Col xs={24}>
          {data.map((aaa, index) => (
            <div className="cart_card" key={index}>
              <img src={aaa.Img} className="cart_card_image" />
              <div>
                <strong>{aaa.ID}</strong>
                <p>
                  {aaa.price}원 ㅣ 총 {aaa.quantity}개
                </p>
                <button onClick={() => delete_cart(aaa.ID)}>삭제</button>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
