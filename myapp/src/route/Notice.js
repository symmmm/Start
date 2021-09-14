import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Pagination } from "antd";
import { pageupdate } from "../redux/reducer/pageReducer";

const Notice = () => {
  const dispatch = useDispatch();
  const Reduxpage = useSelector((state) => state.PageSearchReducer.Reduxpage);

  const [get_board_data, set_board_data] = useState([]);
  const [total, settotal] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/board/" + Reduxpage).then((response) => {
      console.log(response.data);
      console.log(response.data.total);
      //const ary = response.data.total.find((aaa) => aaa);
      settotal(response.data.total);
      set_board_data(response.data.docs);
    });
    console.log(Reduxpage);
  }, [Reduxpage]);

  const PageHandeler = (page) => {
    dispatch(pageupdate(page));
  };
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
                  <td>
                    <Link to={`/Community/Notice/${user.number}`}>
                      {user.title}
                    </Link>
                  </td>
                  <td>{user.auth}</td>
                  <td>{user.create_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="page_box">
          <Pagination
            current={Reduxpage}
            total={total}
            onChange={PageHandeler}
          />
        </div>
      </div>
    </div>
  );
};

export default Notice;
