import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { ERR_MSG_INPUT_TITLE, ERR_MSG_INPUT_MEMO } from '../constants/index.js';

class Layer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      visible: false,
      errMsg: ''
    };

    this.saveANote = this.saveANote.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  saveANote(tit, ctt) {
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
    this.props.addNewClick(tit, ctt);
  }

  hide() {
    this.setState({
      visible: false
    });
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
          <h2>New Tab</h2>
          <i title="Save" className="iconfont icon-save" onClick={() => this.saveANote(this.state.title, this.state.content)}>&#xe8c5;</i>
          <i title="Close" className="iconfont icon-close" onClick={this.props.closeLayerWrap}>&#xe86d;</i>
          <div className="input-box">
            <input type="text" placeholder="Please input title..." onChange={this.changeTitle} value={this.state.title} />
          </div>
          <div className="textarea-box">
            <textarea onChange={this.changeContent} value={this.state.content} placeholder="Please input memo here!~~~"></textarea>
          </div>
          <Rodal width="200" height="100" animation="rotate" closeOnEsc="true" visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div className="error-msg">
              <p>{this.state.errMsg}</p>
            </div>
          </Rodal>
        </div>
      </div>
    );
  }
}

export default Layer;