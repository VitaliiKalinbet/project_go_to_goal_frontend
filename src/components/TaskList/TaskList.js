import React from 'react';
import { connect } from 'react-redux';
import styles from './TaskList.module.css';

import ActiveTaskList from '../ActiveTaskList/ActiveTaskList';
import DoneTaskList from '../DoneTaskList/DoneTaskList';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const TaskList = (activePosts, getGoal, goal) => {
  return (
    <div className={styles.taskList}>
      <CreateTaskButton />
      <ActiveTaskList activePosts={activePosts} getGoal={getGoal} />
      {goal !== null && <DoneTaskList />}
    </div>
  );
};

const MSTP = s => ({
  goal: dashboardSelectors.getGoal(s),
});

export default connect(
  MSTP,
  null,
)(TaskList);
