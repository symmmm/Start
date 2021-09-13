import { INCREASE_STATE} from "../type";

export const nowCount = (CommentCount) => ({
    type: INCREASE_STATE,
    payload: { count: CommentCount },
  });
  
const initialState = {
    CommentCount: 0,
  };

const increase = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE_STATE:
        return {
          ...state,
          CommentCount: action.payload.count,
        };

      default:
        return state;
    }
  };
  
  export default increase;