import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NoticeDetail = () => {
  const [data, setData] = useState({});
  const board_id = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/board/detail/" + board_id.number)
      .then((response) => {
        console.log("QQ", response.data);
        setData(response.data);
      });
  }, []);
  //console.log("파람", board_id);
  return (
    <div>
      <br></br>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>글번호{data.number}</div>
      <div>작성자{data.auth}</div>
      <div>{data.contents}</div>
    </div>
  );
};

export default NoticeDetail;
