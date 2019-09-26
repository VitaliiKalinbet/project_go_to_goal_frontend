import { connect } from 'react-redux';

// ACTIONS
import * as modalAddTaskActions from '../../redux/ModalAddTask/ModalAddTaskActions';
import * as modalCongratsActions from '../../redux/ModalCongrats/ModalCongratsActions';
import * as modalCreateGoalActions from '../../redux/ModalCreateGoal/ModalCreateGoalActions';
import * as modalDeleteTaskActions from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';
import * as modalLogoutActions from '../../redux/ModalLogout/ModalLogoutActions';
import * as dashboardOperations from '../../redux/Dashboard/DashboardOperations';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as sessionLoginActions from '../../redux/sessionLogin/sessionLoginActions';

//  COMPONENT TO WRAP
import DashboardPage from './DashboardPage';

const mapStateToProps = store => ({
  isModalAddTaskOpen: store.modals.isModalAddTaskOpen,
  isModalCongratsOpen: store.modals.isModalCongratsOpen,
  isModalCreateGoalOpen: store.modals.isModalCreateGoalOpen,
  isModalDeleteTaskOpen: store.modals.isModalDeleteTaskOpen,
  isModalLogoutOpen: store.modals.isModalLogoutOpen,
  isLoading: store.isLoading,
  goal: dashboardSelectors.getGoal(store),
  tasks: dashboardSelectors.getTasks(store),
  token: dashboardSelectors.getToken(store),
  hasDashboardError: dashboardSelectors.hasDashboardError(store),
  dashboardErrors: dashboardSelectors.getDashboardErrors(store),
});

const mapDispatchToProps = dispatch => ({
  onCloseModalAddTask: () => dispatch(modalAddTaskActions.closeModal()),
  onCloseModalCongrats: () => dispatch(modalCongratsActions.closeModal()),
  onCloseModalCreateGoal: () => dispatch(modalCreateGoalActions.closeModal()),
  onCloseModalDeleteTask: () => dispatch(modalDeleteTaskActions.closeModal()),
  onCloseModalLogout: () => dispatch(modalLogoutActions.closeModal()),
  onGetGoal: token => dispatch(dashboardOperations.getGoalOperation(token)),
  onGetTasks: token => dispatch(dashboardOperations.getTasksOperation(token)),
  onDashboardErrors: errors => dashboardOperations.getErrorOperation(errors),
  onLogout: () => dispatch(sessionLoginActions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
