import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Menu, Dropdown, Button, Pagination, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { pageupdate, PageSearch } from "../redux/reducer/pageReducer";
const { Search } = Input;

const Notice = () => {
  const [getMenu, setMenu] = useState("제목");
  const dispatch = useDispatch();
  const Reduxpage = useSelector((state) => state.PageSearchReducer.Reduxpage);
  const SearchList = useSelector((state) => state.PageSearchReducer.SearchList);
  const SelectMenu = useSelector((state) => state.PageSearchReducer.SelectMenu);
  const searchValue = useSelector(
    (state) => state.PageSearchReducer.searchValue
  );
  const [get_board_data, set_board_data] = useState([]);
  const [total, settotal] = useState();

  useEffect(() => {
    if (SearchList) {
      axios
        .get(
          "http://localhost:8000/board/search/" +
            SelectMenu +
            "/" +
            searchValue +
            "/" +
            Reduxpage
        )
        .then((response) => {
          //console.log("검색");
          set_board_data(response.data.docs);
          settotal(response.data.total);
        });
    } else {
      axios.get("http://localhost:8000/board/" + Reduxpage).then((response) => {
        console.log(response.data);
        console.log(response.data.total);
        //const ary = response.data.total.find((aaa) => aaa);
        settotal(response.data.total);
        set_board_data(response.data.docs);
      });
    }
    console.log(Reduxpage);
  }, [Reduxpage]);

  const PageHandeler = (page) => {
    dispatch(pageupdate(page));
  };
  /////////검색///////
  const onSearch = (value) => {
    console.log(value);
    if (value) {
      axios
        .get(
          "http://localhost:8000/board/search/" + getMenu + "/" + value + "/1"
        )
        .then((response) => {
          console.log("검색실행", response.data.total);
          settotal(response.data.total);
          set_board_data(response.data.docs);
          dispatch(pageupdate(1));
          dispatch(PageSearch(getMenu, value));
        });
    } else {
      alert("검색할 내용을 입력하세요.");
    }
  };
  function handleMenuClick(e) {
    setMenu(e.key);
    console.log(e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="제목">제목</Menu.Item>
      <Menu.Item key="작성자">작성자</Menu.Item>
      <Menu.Item key="내용">내용</Menu.Item>
      <Menu.Item key="전체">전체</Menu.Item>
    </Menu>
  );
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
        <div className="search_box">
          <Dropdown overlay={menu} trigger="click">
            <Button>
              {getMenu} <DownOutlined />
            </Button>
          </Dropdown>{" "}
          <Search
            placeholder="내용을 입력하세요"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
    </div>
  );
};

export default Notice;
