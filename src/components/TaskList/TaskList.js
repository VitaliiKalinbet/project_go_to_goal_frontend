import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TaskList.module.css';

import ActiveTaskList from '../ActiveTaskList/ActiveTaskList';
import DoneTaskList from '../DoneTaskList/DoneTaskList';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const TaskList = ({ activePosts, hasGoal }) => {
  let isDisabled;
  if (activePosts.length >= 8 || !hasGoal) {
    isDisabled = true;
  }
  return (
    <div className={styles.taskList}>
      {!isDisabled && <CreateTaskButton />}
      <ActiveTaskList />
      <DoneTaskList />
    </div>
  );
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  hasGoal: dashboardSelectors.hasGoal(store),
});

TaskList.propTypes = {
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  hasGoal: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(TaskList);
