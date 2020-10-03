import { connect } from 'react-redux';
import Home from '../../../views/home';
import emmit from '../../actions';

const mapStateToProps = (state) => ({
  name: state.userStore.name,
});

const mapDispatchToProps = (dispatch) => ({
  actionSetUser: (user) => dispatch(emmit.user.action.actionSetUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
