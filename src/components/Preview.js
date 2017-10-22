import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { ERR_MSG_ILLEGAL_EDIT } from '../constants/index.js';

const marked = require('marked');

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      errMsg: ''
    };

    this.editMemo = this.editMemo.bind(this);
    this.deleteMemo = this.deleteMemo.bind(this);
  }

  editMemo() {
    if (this.props.currentMemo.id === undefined) {
      this.setState({
        errMsg: ERR_MSG_ILLEGAL_EDIT,
        visible: true
      });

      return;
    }
    this.props.editClick(!this.props.isShowEditor);
  }

  deleteMemo() {
    const _id = this.props.currentMemo.id;
    if (_id === undefined) {
      this.setState({
        errMsg: ERR_MSG_ILLEGAL_EDIT,
        visible: true
      });

      return;
    }

    this.props.deleteClick(_id);
  }

  hideErrMsg() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className="right-box">
        <div className="preview-top">
          <a title="Edit" className="modify-btn iconfont" onClick={() => this.editMemo()}>&#xe738;</a>
          <a title="Delete" className="delete-btn iconfont" onClick={() => this.deleteMemo()}>&#xe74b;</a>
        </div>
        <div onClick={this.props.onClick} className="preview-wrap markdown-body" dangerouslySetInnerHTML={{ __html: marked(`${this.props.currentMemo.title ? '# ' + this.props.currentMemo.title : ''}\n\n${this.props.currentMemo.content ? this.props.currentMemo.content : ''}`) }}></div>
        <Rodal width={200} height={100} animation="zoom" closeOnEsc={true} visible={this.state.visible} onClose={this.hideErrMsg.bind(this)}>
          <div className="error-msg">
            <p>{this.state.errMsg}</p>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default Preview;