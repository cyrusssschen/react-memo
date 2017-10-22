import { connect } from 'react-redux';
import Edit from '../components/Edit';
import { addMemo, showEditor } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  isShowEditor: state.isShowEditor,
  id: state.cmemo.id,
  title: state.cmemo.title,
  content: state.cmemo.content
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewClick: (title, content, id) => {
    dispatch(addMemo(title, content, id))
    dispatch(showEditor(false))
  },
  closeLayerWrap: () => dispatch(showEditor(false))
});

const ContainerEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default ContainerEditor;