import moment from 'moment';
import { getStorage } from '../utils/storage';
import { ADD_MEMO, DELETE_MEMO, SHOW_MEMO, SHOW_LAYER, SHOW_EDITER } from '../constants';

let memoId;
let memosArr2;
let memosArr = JSON.parse(getStorage('memos'));

if (memosArr instanceof Array && memosArr.length !== 0) {
  if (memosArr.length === 1) {
    memosArr2 = memosArr;
  } else {
    memosArr2 = memosArr.sort(function (a,b){
      return a.id < b.id;
    })
  }
  memoId = memosArr2[0]['id']+1;
} else {
  memoId = 0;
}

// Add or edit a memo
export const addMemo = (title, content, id, time) => {
  if (id === undefined && time === undefined) {
    return {
      type: ADD_MEMO,
      id: memoId++,
      title,
      content,
      time: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  } else {
    return {
      type: ADD_MEMO,
      id,
      title,
      content,
      time: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  }
}

// Delete the memo
export const deleteMemo = (id) => {
  return {
    type: DELETE_MEMO,
    id
  };
}

// Preview the memo
export const showMemo = (id) => {
  return {
    type: SHOW_MEMO,
    id
  };
}

// display show layer
export const showLayer = (isShowLayer) => {
  return {
    type: SHOW_LAYER,
    isShowLayer
  };
}

// display editor layer
export const showEditer = (isShowEditer) => {
  return {
    type: SHOW_EDITER,
    isShowEditer
  };
}