import { connect } from 'react-redux';
import Preview from '../components/Preview';
import { deleteMemo, showEditer } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  currentMemo: state.cmemo,
  isShowEditer: state.isShowEditer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editClick: (isSE) => {
    dispatch(showEditer(isSE))
  },
  deleteClick: (id) => {
    dispatch(deleteMemo(id))
  }
});

const ContainerPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);

export default ContainerPreview;