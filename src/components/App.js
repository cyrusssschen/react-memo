import React from 'react';
import { connect } from 'react-redux';

import Head from './Head';
import ContainerList from '../containers/ContainerList';
import ContainerPreview from '../containers/ContainerPreview';
import ContainerLayer from '../containers/ContainerLayer';
import ContainerEdit from '../containers/ContainerEdit';
import '../assets/App.css';


class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMemoDetail: false,
    };

    this.changeStatusShow = this.changeStatusShow.bind(this);
  }

  changeStatusShow(status) {
    this.setState({
      showMemoDetail: status
    });
  }

  render() {
    const layer = this.props.isShowLayer ? <ContainerLayer /> : '';
    const editer = this.props.isShowEditer ? <ContainerEdit /> : '';
    return (
      <div className="App">
        <Head></Head>
        <main className="hastop">
          <ContainerList showMemoDetail={this.state.showMemoDetail} changeStatusShow={this.changeStatusShow}></ContainerList>
          <ContainerPreview showMemoDetail={this.state.showMemoDetail}
            changeStatusShow={this.changeStatusShow}></ContainerPreview>
        </main>
        {layer}
        {editer}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer,
  isShowEditer: state.isShowEditer
});

const App = connect(
  mapStateToProps
)(Root);

export default App;
