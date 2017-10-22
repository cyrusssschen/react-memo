import { connect } from 'react-redux';
import Preview from '../components/Preview';
import { deleteMemo, showEditor } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  currentMemo: state.cmemo,
  isShowEditor: state.isShowEditor
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editClick: (isSE) => {
    dispatch(showEditor(isSE))
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