import React from 'react';
import ListItem from './ListItem';

const List = ({ listData, isShowLayer, showNoteDetail, changeStatusShow, onClick, addBtnClick }) => {
  let hasNoteToggle;
  if (listData.length === 0) {
    hasNoteToggle = <p className="tips">There is no memo here!～</p>
  } else {
    hasNoteToggle = <ul className="list-wrap">
      {listData.map((item) => {
        const cls = (item.isActive) ? 'active' : ''
        return (
          <ListItem key={item.id} id={item.id} title={item.title} content={(item.content.length>80) ? (item.content.substring(0, 80)+'...') : item.content} time={item.time} cls={cls} showNoteDetail={showNoteDetail} clickPreview={onClick} />
        );
      })
      }
    </ul>
  }
  return (
    <div className="left-box">
      <h1 className={"iconfont"}>&#xe738; </h1>
      <span title="Add" className="add-new" onClick={() => addBtnClick(!isShowLayer)}><i className="iconfont">&#xe889;</i></span>
      {hasNoteToggle}
    </div>
  );
}

export default List;