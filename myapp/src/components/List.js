import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nowCount } from "../redux/reducer/increase";

const List = ({ number }) => {
  const dispatch = useDispatch();
  const reduxNumber = useSelector((state) => state.increase.CommentCount);
  console.log(reduxNumber);

  const Click = () => {
    dispatch(nowCount(reduxNumber + 1));
  };

  return (
    <div>
      <li>넘겨받은값:{number}</li>
      <li>리덕스값:{reduxNumber}</li>
      <Link to="/test/contents">
        <li>bbb</li>
      </Link>
      <li>원래 데이터 값:</li>
      <button onClick={Click}>증가버튼</button>
    </div>
  );
};

export default List;
