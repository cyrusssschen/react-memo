import { ADD_MEMO, DELETE_MEMO, SHOW_MEMO, SHOW_LAYER, SHOW_EDITER } from '../constants/index.js';
import {setStorage, getStorage} from '../utils/storage';

// Get initial state
const localmemos = JSON.parse(getStorage('memos'));
const localcmemo = getStorage('cmemo');
const initialState = {
  memos: localmemos || [],
  cmemo: localcmemo || {},
  isShowLayer: false,
  idShowEditer: false
};

const memo = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEMO:
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        content: action.content,
        time: action.time
      });
    default:
      return state;
  }
}

const memos = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMO:
      let isNew = true;
      const _arr = state.map((item) => {
        if (item.id === action.id) {
          isNew = false;
          item.title = action.title;
          item.content = action.content;
          item.time = action.time;
        }
        return item;
      })

      if (isNew) {
        return [...state, memo({}, action)];
      } else {
        return _arr;
      }
    default:
      return state;
  }
}

const memoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMO:
      let _memos = memos(state.memos, action);
      // set local storage
      setStorage('memos',JSON.stringify(_memos));

      return Object.assign({}, state, {
        memos: _memos
      });
    case SHOW_MEMO:
      // add active style when item is chosen
      const memosArr = state.memos.map((item) => {
        if (item.id === action.id) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
      let _cmemo = state.memos.filter(item => item.id === action.id)[0];

      // set local storage
      setStorage('memos',JSON.stringify(memosArr));
      setStorage('cmemo',_cmemo);

      return Object.assign({}, state, {
        memos: memosArr,
        cmemo: _cmemo
      });
    
      // Delete list item
    case DELETE_MEMO:
      let newmemos = state.memos.filter(item => item.id !== action.id);

      // Set local storage
      setStorage('memos',JSON.stringify(newmemos));
      setStorage('cmemo',{});

      return Object.assign({}, state, {
        memos: newmemos,
        cmemo: {}
      });
    case SHOW_LAYER:
      return Object.assign({}, state, {
        isShowLayer: action.isShowLayer
      });
    case SHOW_EDITER:
      return Object.assign({}, state, {
        isShowEditer: action.isShowEditer
      });
    default:
      return state;
  }
}

export default memoApp;

