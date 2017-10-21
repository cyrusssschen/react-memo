import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { ERR_MSG_INPUT_TITLE, ERR_MSG_INPUT_MEMO } from '../constants/index.js';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    const _t = this.props.title;
    const _c = this.props.content;
    this.state = {
      title: _t,
      content: _c,
      visible: false,
      errMsg: ''
    };

    this.saveMemo = this.saveMemo.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  saveMemo(tit, ctt, id) {
    if (!tit.trim() || !ctt.trim()) {
      let errMsg = "";
      if (!tit.trim()) {
        errMsg = ERR_MSG_INPUT_TITLE;
      }
      else if (!ctt.trim()) {
        errMsg = ERR_MSG_INPUT_MEMO;
      }

      this.setState({
        errMsg: errMsg,
        visible: true
      });

      return;
    }

    this.props.addNewClick(tit, ctt, id);
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return (
      <div className="layer-wrap">
        <div className="layer-container">
          <h2>Edit Tab</h2>
          <i title="Save" className="iconfont icon-save" onClick={() => this.saveMemo(this.state.title, this.state.content, this.props.id)}>&#xe8c5;</i>
          <i title="Close" className="iconfont icon-close" onClick={this.props.closeLayerWrap}>&#xe86d;</i>
          <div className="input-box">
            <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title} />
          </div>
          <div className="textarea-box">
            <textarea onChange={this.changeContent} value={this.state.content}></textarea>
          </div>
          <Rodal width="200" height="100" animation="fade" closeOnEsc="true" visible={this.state.visible} onClose={this.props.closeLayerWrap}>
            <div className="error-msg">
              <p>{this.state.errMsg}</p>
            </div>
          </Rodal>
        </div>
      </div>
    );
  }
}

export default Edit;