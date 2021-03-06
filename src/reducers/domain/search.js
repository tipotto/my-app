import initState from '../initState';
import { SUCCEEDED_SEARCH, LOAD_ITEMS, LOAD_ITEM_NUMBER } from '../../actions';

const searchReducer = (
  state = initState.search,
  { type, resData, moldedData } = {}
) => {
  switch (type) {
    case SUCCEEDED_SEARCH:
      return {
        ...state,
        items: resData.items,
        loaded: resData.loaded,
        loadItemNum: state.loadItemNum + LOAD_ITEM_NUMBER,
      };

    case LOAD_ITEMS:
      // 元の配列に、新しく取得した配列をマージする。
      return {
        ...state,
        items: moldedData.items,
        loaded: state.loaded.concat(moldedData.loaded),
        // loaded: [ ...state.loaded, ...moldedData.loaded],
        loadItemNum: state.loadItemNum + LOAD_ITEM_NUMBER,
      };

    default:
      return state;
  }
};

// const searchReducer = (state = initState.search, action) => {
//   switch (action.type) {
//     case SUCCEEDED_SEARCH:
//       return {
//         ...state,
//         items: action.resData.items,
//         loaded: action.resData.loaded,
//         loadItemNum: state.loadItemNum + LOAD_ITEM_NUMBER,
//       };

//     case LOAD_ITEMS:
//       // 元の配列に、新しく取得した配列をマージする。
//       return {
//         ...state,
//         items: action.moldedData.items,
//         loaded: state.loaded.concat(action.moldedData.loaded),
//         // loaded: [ ...state.loaded, ...action.moldedData.loaded],
//         loadItemNum: state.loadItemNum + LOAD_ITEM_NUMBER,
//       };

//     default:
//       return state;
//   }
// };

export default searchReducer;
