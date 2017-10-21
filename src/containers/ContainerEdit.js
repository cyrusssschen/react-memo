import { connect } from 'react-redux';
import Edit from '../components/Edit';
import { addMemo, showEditer } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  isShowEditer: state.isShowEditer,
  id: state.cmemo.id,
  title: state.cmemo.title,
  content: state.cmemo.content
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewClick: (title, content, id) => {
    dispatch(addMemo(title, content, id))
    dispatch(showEditer(false))
  },
  closeLayerWrap: () => dispatch(showEditer(false))
});

const ContainerEditer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default ContainerEditer;