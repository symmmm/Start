import { UPDATE_PAGE } from "../type";

export const pageupdate = (page_value) => ({
  type: UPDATE_PAGE,
  payload: page_value,
});

const initialState = {
  Reduxpage: 1,
};

const PageSearchReducer = (state = initialState, action) => {
  switch (action.type) {
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
