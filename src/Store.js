import { createStore } from 'redux';

const initData = {
  // メモのデータ初期値
  data: [
    {message: "sample data", created: new Date()},
  ],
  // 表示するメッセージ
  message: 'please type message',
  // 操作内容
  mode: 'default',
  // 検索したメモ
  fdata: [],
};

// レデューサー
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case "ADD":
      // addReduce関数でreturnされる新たなステートをreturn
      return addReduce(state, action);
    case "DELETE":
      return deleteReduce(state, action);
    case "FIND":
      return findReduce(state, action);
    default:
      return state;
  }
}

/*=========================================================
  レデュースアクション
=========================================================*/
// メモ追加のレデュース処理
function addReduce(state, action) {
  let data = {
    message: action.message,
    created: new Date()
  };
  // ※配列を再作成しないとReduxはstateに変更があったと検知しない
  let newData = state.data.slice();
  // dataをnewData配列の最初に追加
  newData.unshift(data);
  return {
    data: newData,
    message: "Added",
    mode: "default",
    fdaga: []
  };
}

// メモ検索のレデュース処理
function findReduce(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0){
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: `find "${f}":`,
    mode: "find",
    fdata: fdata
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action) {
  let newData = state.data.slice();
  newData.splice(action.index, 1);
  return {
    data: newData,
    message: `delete "${action.index}"`,
    mode: "delete",
    fdata: []
  }
}

/*=========================================================
  アクションクリエーター（dispatchの際に引数として渡すアクションを作成する関数）
=========================================================*/
// メモ追加のアクション
export function addMemo(text) {
  return {
    type: "ADD",
    message: text
  }
}

// メモ削除のアクション
export function deleteMemo(num) {
  return {
    type: "DELETE",
    index: num
  }
}

// メモ検索のアクション
export function findMemo(text) {
  return {
    type: "FIND",
    find: text
  }
}

// ストアを作成
export default createStore(memoReducer);