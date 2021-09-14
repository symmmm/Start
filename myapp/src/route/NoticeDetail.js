import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticeDetail = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/boardDetail/" + 20).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return <div>asdas</div>;
};

export default NoticeDetail;
