import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
        title: "Accessories",
        path: "/store/Accessories",
      },
    ],
  },

  {
    title: "LookBook",
    path: "/board",
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
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Review",
        path: "/Community/Review",
        icon: <IoIcons.IoIosPaper />,
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
