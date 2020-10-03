import { connect } from 'react-redux';
import Board from '../../../views/board';

const mapStateToProps = (state) => ({
  name: state.userStore.name,
});

export default connect(mapStateToProps, null)(Board);
