import React from 'react';

const ListItem = ({ id, title, content, time, clickPreview, showMemoDetail, cls}) => {
  return (
    <li className={cls} data-id={id} onClick={() => {
      clickPreview(id)
    }}>
      <div className="listbox">
        <h3 className="listtitle">{title}</h3>
        <p>{content}</p>
        <span><i className="iconfont">&#xe600;</i>{time}</span>
      </div>
    </li>
  );
}

export default ListItem;