import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ModalAddTaskActions from '../../redux/ModalAddTask/ModalAddTaskActions';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import styles from './CreateTaskButton.module.css';

const CreateTaskButton = ({ openModal, activePosts, hasGoal }) => {
  let isDisabled;
  if (activePosts.length >= 8 || !hasGoal) {
    isDisabled = true;
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        disabled={isDisabled}
        className={isDisabled === true ? styles.disableBtn : styles.button}
      >
        +
      </button>
    </>
  );
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  hasGoal: dashboardSelectors.hasGoal(store),
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(ModalAddTaskActions.openModal()),
});

CreateTaskButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  hasGoal: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTaskButton);
