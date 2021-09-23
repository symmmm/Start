import { Row, Col } from "antd";
import { useState } from "react";

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
  return (
    <div>
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
            <div>선택된 사이즈:{get_Size}</div>
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
          </div>
        </Col>
        {data.img.map((aaa, index) => (
          <Col xs={24} md={18} key={index}>
            <div className="detail_product_image">
              <img className="Detail_Image" src={aaa}></img>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Detail;
