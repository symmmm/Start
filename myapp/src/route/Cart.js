import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [CheckList, setCheckList] = useState([]);
  const [IdList, setIdList] = useState([]);
  const data = JSON.parse(localStorage.getItem("cart"));
  /*const delete_cart = (value) => {
    console.log("삭제", value);
    let cartCopy = [...data];
    cartCopy = cartCopy.filter((item) => item.ID != value);
    setCart(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };*/
  ///////////////////////////////////////////////////////

  useEffect(() => {
    let ids = [];
    data.map((item, index) => {
      ids[index] = item.ID;
    });
    setIdList(ids);
  }, [cart]);

  const onChangeEach = (e, id) => {
    if (e.target.checked) {
      setCheckList([...CheckList, id]);
    } else {
      setCheckList(CheckList.filter((clear) => clear !== id));
    }
  };
  console.log(CheckList);

  const select_delete = (v) => {
    console.log("선택삭제 실행", v);
    let cartCopy = [...data];
    cartCopy = cartCopy.filter((item) => !v.includes(item.ID));
    //"values.includes(item)" 메서드는 "values" 배열에 item 값이 있는지를 비교합니다. 메서드 앞에 "!"를 붙여서 포함되지 않는 아이템만 골라냄
    console.log(cartCopy);
    setCart(cartCopy);
    setCheckList([]); //체크리스트 비워주기
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const [all, setall] = useState(false);
  const onChangeAll = () => {
    setall(!all);
    console.log("전체선택", all);
    setCheckList(all ? [] : IdList);
  };
  let resultData = [...data];
  const result = resultData.reduce(
    (acc, cur) => acc + parseInt(cur.price * cur.quantity),
    0
  );
  return (
    <Row>
      <Col xs={24} md={6}></Col>
      <Col xs={24} md={12}>
        <div className="cart_page">
          {data.map((aaa, index) => (
            <div className="cart_card" key={index}>
              <div className="div_input">
                {" "}
                <input
                  type="checkbox"
                  onChange={(e) => onChangeEach(e, aaa.ID)}
                  checked={CheckList.includes(aaa.ID)}
                ></input>
              </div>
              <img src={aaa.Img} className="cart_card_image" alt="profile" />
              <div>
                <Link to={`/detail/${aaa.product_num}`}>
                  <strong>{aaa.ID}</strong>
                </Link>
                <p>
                  {aaa.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                  ㅣ {aaa.quantity}개
                </p>
                <p>
                  합계:
                  {(parseInt(aaa.price) * aaa.quantity)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </p>
              </div>
            </div>
          ))}
          <div className="cart_wrap">
            <button onClick={onChangeAll} className="cart_button2">
              {" "}
              전체선택
            </button>
            <button
              className="cart_button2"
              onClick={() => select_delete(CheckList)}
            >
              선택삭제
            </button>
          </div>
          <div className="payment_wrap">
            <span>결제 예정 금액</span>
            <span>
              {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </span>
          </div>
          <div className="cart_wrap">
            <button className="cart_button2">주문하기</button>
          </div>
        </div>
      </Col>
      <Col xs={24} md={6}></Col>
    </Row>
  );
};

export default Cart;
