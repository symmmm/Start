import { UPDATE_PAGE, UPDATE_SEARCH_PAGE, DELETE_SEARCH_PAGE } from "../type";

export const pageupdate = (page_value) => ({
  type: UPDATE_PAGE,
  payload: page_value,
});

export const PageSearch = (SelectMenu, searchValue) => ({
  type: UPDATE_SEARCH_PAGE,
  payload: { menu: SelectMenu, search: searchValue },
});

export const DeleteSearch = () => ({
  type: DELETE_SEARCH_PAGE,
});

const initialState = {
  Reduxpage: 1,
  SelectMenu: "제목",
  SearchList: false,
  searchValue: "",
};

const PageSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_PAGE:
      return {
        ...state,
        SearchList: true,
        SelectMenu: action.payload.menu,
        searchValue: action.payload.search,
      };
    case DELETE_SEARCH_PAGE:
      return {
        ...state,
        Reduxpage: 1,
        SearchList: false,
        SelectMenu: "제목",
        searchValue: "",
      };
    case UPDATE_PAGE:
      return {
        ...state,
        Reduxpage: action.payload,
      };

    default:
      return state;
  }
};

export default PageSearchReducer;
