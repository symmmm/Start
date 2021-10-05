import { useState } from "react";
import React from "react";

const Review = React.memo(() => {
  const data = {
    product: [
      {
        Review_num: "1",
        Review_title: "배송도빠르고 굿",
        Review_detail: "너무너무좋아",
        product_name: "wwfggasdasdasds벨트a BLACK",
        write_date: "2021-09-26",
        auth_name: "잼민이",
        img_url:
          "http://belier.co.kr/file_data/minkc2516/2021/09/20/629d724378f3ef498f2181865f499e10.jpeg",
      },
      {
        Review_num: "2",
        Review_title: "굿굿",
        Review_detail: "좋아",
        product_name: "wwfggasdasdasds벨트a BLACK",
        write_date: "2021-09-28",
        auth_name: "뚝딱이",
        img_url:
          "https://static.coupangcdn.com/image/retail/images/86808803350686-27887267-dd3c-4072-9ed5-84d6ba86305f.jpg",
      },
      {
        Review_num: "3",
        Review_title: "개별로",
        Review_detail: "싫어 게ㅐ별로",
        product_name: "wwfggasdasdasds벨트a BLACK",
        write_date: "2021-09-28",
        auth_name: "유재석",
        img_url:
          "https://static.coupangcdn.com/image/retail/images/86808803350686-27887267-dd3c-4072-9ed5-84d6ba86305f.jpg",
      },
      {
        Review_num: "4",
        Review_title: "젛아요~",
        Review_detail: "포인트 ㄳ",
        product_name: "wwfggasdasdasds벨트a BLACK",
        write_date: "2021-09-29",
        auth_name: "타노스",
        img_url:
          "https://static.coupangcdn.com/image/retail/images/86808803350686-27887267-dd3c-4072-9ed5-84d6ba86305f.jpg",
      },
    ],
  };
  const [ClickID, set_ClickID] = useState(-1);
  //const [detail_isopen, setdetail] = useState(false);

  const Review_DetailClick = (value) => {
    console.log("벨류", value);
    if (ClickID === value) {
      set_ClickID(-1);
    } else {
      set_ClickID(value);
    }
  };
  console.log("클릭아이디", ClickID);
  //console.log(detail_isopen);
  return (
    <div className="review_board">
      {data.product.map((aaa, index) => (
        <div key={index}>
          <div
            className="review_list"
            onClick={() => Review_DetailClick(aaa.Review_num)}
          >
            <span style={{ width: "10%", marginLeft: "15px" }}>
              {aaa.Review_num}
            </span>
            <strong style={{ width: "60%" }}>{aaa.Review_title}</strong>
            <strong style={{ width: "20%", textAlign: "center" }}>
              {aaa.auth_name}
            </strong>
            <span
              style={{
                paddingTop: "3px",
                width: "20%",
                whiteSpace: "break-spaces",
                fontSize: "0.5rem",
                textAlign: "center",
              }}
            >
              {aaa.write_date}
            </span>
          </div>
          {ClickID === aaa.Review_num ? (
            <div>
              <div className="review_image_box">
                <img
                  className="review_image"
                  src={aaa.img_url}
                  alt="profile"
                ></img>
              </div>
              <p>{aaa.Review_detail}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
});

export default React.memo(Review);
