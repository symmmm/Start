import React, { useState } from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { nowCount } from "../redux/reducer/increase";
/////////////////디테일 페이지에서 댓글수와 추천수를 받아와서 올라가면 업데이트

const Detail = () => {
  const dispatch = useDispatch();
  const [number, setnumber] = useState(0);
  const onClick = () => {
    setnumber(number + 1);
    dispatch(nowCount(number + 1));
  };
  return (
    <div>
      내용물
      <br></br>
      <div>스테이트값:{number}</div>
      <List number={number} />
      <button onClick={onClick}>디테일증가버튼</button>
    </div>
  );
};

export default Detail;
