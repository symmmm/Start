import React, { useEffect, useState } from "react";
import axios from "axios";

const Notice = () => {
  const [get_board_data, set_board_data] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/board").then((response) => {
      console.log(response.data);
      set_board_data(response.data);
    });
  }, []);

  return (
    <div className="notice">
      <div className="board_LIST">
        공지사항
        <div>
          <table>
            <colgroup>
              <col width="5%" />
              <col width="40%" />
              <col width="10%" />
              <col width="15%" />
            </colgroup>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
            <tbody>
              {get_board_data.map((user, index) => (
                <tr key={index}>
                  <td>{user.number}</td>
                  <td>{user.title}</td>
                  <td>{user.auth}</td>
                  <td>{user.create_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notice;
