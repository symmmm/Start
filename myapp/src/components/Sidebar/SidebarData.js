import React from "react";
import * as RiIcons from "react-icons/ri";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Store",
    path: "/store",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "New arrival",
        path: "/store/Newarrival",
        cName: "sub-nav",
      },
      {
        title: "outer",
        path: "/store/outer",
        cName: "sub-nav",
      },
      {
        title: "top",
        path: "/store/top",
        cName: "sub-nav",
      },
      {
        title: "pants",
        path: "/store/pants",
        cName: "sub-nav",
      },
      {
        title: "Accessories",
        path: "/store/Accessories",
      },
    ],
  },

  {
    title: "LookBook",
    path: "/lookbook",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "Community",
    path: "/Community",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Notice",
        path: "/Community/Notice",
      },
      {
        title: "Review",
        path: "/Community/Review",
      },
    ],
  },

  {
    title: "MyPage",
    path: "/mypage",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "내정보",
        path: "/mypage/myinfo",
      },
      {
        title: "주문내역",
        path: "/mypage/userorders",
      },
    ],
  },

  {
    title: "TEST",
    path: "/test",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "디테일",
        path: "/test/contents",
      },
      {
        title: "리스트",
        path: "/test/postlist",
      },
    ],
  },
];
