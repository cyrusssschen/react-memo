import { connect } from 'react-redux';
import List from '../components/List';
import { showMemo, showLayer } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  listData: state.memos,
  isShowLayer: state.isShowLayer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => {
    dispatch(showMemo(id));
  },
  addBtnClick: (isSL) => {
    dispatch(showLayer(isSL));
  }
});

const ContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ContainerList;