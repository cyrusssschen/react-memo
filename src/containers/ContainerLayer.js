import { connect } from 'react-redux';
import Layer from '../components/Layer';
import { addMemo, showLayer } from '../actions/memo';

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewClick: (title, content) => {
    dispatch(addMemo(title, content))
    dispatch(showLayer(false))
  },
  closeLayerWrap: () => dispatch(showLayer(false))
});

const ContainerLayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layer);

export default ContainerLayer;