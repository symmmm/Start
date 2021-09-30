import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import Review from "../../components/review/Review";

const Detail = () => {
  const data = {
    product_id: "1",
    product_name: "wwfggasdasdasds벨트a BLACK",
    product_price: "100000",
    product_detail:
      "CONE DENIM 세미 부츠컷 데님 팬츠는 과하지 않고 자연스럽게 넓어지면서 트렌디한 세미 부츠컷 실루엣이 매력적인 데님 팬츠입니다.",
    product_size:
      "Model is 185cm tall and Wearing a size L(Top) & M (Bottom)  * 실측 사이즈는 하단 사이즈 표를 참고해주세요.",
    product_sale: "20",
    img_url:
      "http://m.insilence.co.kr/web/product/medium/202109/8d309f506b411c0ea1c144f28a98f0fb.jpg",
    change_url:
      "http://www.insilence.co.kr/web/product/extra/big/202108/30e799ef14bfe7705e6470cac375a348.jpg",

    img: [
      "http://m.insilence.co.kr/web/product/medium/202109/8d309f506b411c0ea1c144f28a98f0fb.jpg",

      "http://m.insilence.co.kr/web/product/medium/202109/8d309f506b411c0ea1c144f28a98f0fb.jpg",
    ],
  };
  //console.log(data);
  const [size_isopen, setsize] = useState(false);
  const sizeinfo = () => {
    setsize((size_isopen) => !size_isopen);
    console.log("asd", size_isopen);
  };

  const [detail_isopen, setdetail] = useState(false);
  const detail_info = () => {
    setdetail((detail_isopen) => !detail_isopen);
    console.log("asd", detail_isopen);
  };
  const [get_Size, set_Size] = useState("");
  const [get_amount, set_amount] = useState(1);
  const [get_price, set_price] = useState(data.product_price);
  const optinon_select = (value) => {
    set_Size(value);
  };
  const up_amount = () => {
    set_amount(get_amount + 1);
    set_price(parseInt(get_price) + parseInt(data.product_price));
  };
  const down_amount = () => {
    if (get_amount > 1) {
      set_amount(get_amount - 1);
      set_price(parseInt(get_price) - parseInt(data.product_price));
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  const [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    if (item.size === "") {
      alert("사이즈 선택은 필수 입니다");
    } else {
      //create a copy of our cart state, avoid overwritting existing state
      const cartCopy = [...cart];

      //assuming we have an ID field in our item
      const { ID } = item;
      console.log("asdasd", cartCopy);
      if (cartCopy.length >= 10) {
        alert("장바구니는 10개까지");
      } else {
        //look for item in cart array
        const existingItem = cartCopy.find((cartItem) => cartItem.ID == ID);

        //if item already exists
        if (existingItem) {
          existingItem.quantity += item.quantity; //update item
        } else {
          //if item doesn't exist, simply add it
          cartCopy.push(item);
          alert("추가되었습니다.");
        }

        //update app state
        setCart(cartCopy);

        //make cart a string and store in local space
        const stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart);
      }
    }
  };

  const updateItem = (itemID, amount) => {};
  const removeItem = (itemID) => {
    console.log(itemID);
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.ID != itemID);

    //update state and local
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  return (
    <div className="detail_page">
      <Row>
        <Col xs={24} md={18}>
          <div className="detail_card">
            <img
              className="Detail_Image"
              src="https://ambient.diskn.com/detailimg/21FW/MEN/BRANDED/intro_2.jpg"
            ></img>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="detail_info">
            <div className="detail_name">{data.product_name}</div>
            <div className="detail_price_box">
              KRW{" "}
              {data.product_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className="option_box">
              <div>
                <span onClick={() => optinon_select("M")}>M</span>
                <span>,</span>
                <span onClick={() => optinon_select("L")}>L </span>
                <span>,</span>
                <span onClick={() => optinon_select("XL")}>XL</span>
              </div>
              <div>
                <span onClick={up_amount}>▲ </span>
                {get_amount}
                <span onClick={down_amount}> ▼</span>
              </div>
            </div>
            <div>
              선택된 사이즈: <strong>{get_Size}</strong>
            </div>
            <div onClick={detail_info} className="detail_info_button">
              Detail
              {detail_isopen ? <span>-</span> : <span>+</span>}
            </div>
            {detail_isopen ? <div>{data.product_detail}</div> : ""}
            <div onClick={sizeinfo} className="detail_info_button">
              Size Guide
              {size_isopen ? <span>-</span> : <span>+</span>}
            </div>
            {size_isopen ? <div>{data.product_size}</div> : ""}
            <div className="pay_box">
              <span>총 상품금액:</span>
              <span>
                {get_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}(
                {get_amount}개)
              </span>
            </div>
            <div className="cart_oreder">
              {" "}
              <button
                className="cart_button"
                onClick={() =>
                  addItem({
                    num: data.product_id,
                    ID: "123123",
                    Img: data.img_url,
                    product_name: data.product_name,
                    price: data.product_price,
                    quantity: get_amount,
                    size: get_Size,
                  })
                }
              >
                장바구니담기
              </button>
              <button className="cart_button">구매하기</button>
            </div>
          </div>
        </Col>
        {data.img.map((aaa, index) => (
          <Col xs={24} md={18} key={index}>
            <div className="detail_product_image">
              <img className="Detail_Image" src={aaa}></img>
            </div>
          </Col>
        ))}
        <Col xs={24} md={18}>
          <div className="review">
            <div className="review_Wrap">
              <strong>상품리뷰</strong>
            </div>
            <Review />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
