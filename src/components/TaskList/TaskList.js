import React from 'react';
import { connect } from 'react-redux';
import styles from './TaskList.module.css';

import ActiveTaskList from '../ActiveTaskList/ActiveTaskList';
import DoneTaskList from '../DoneTaskList/DoneTaskList';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <CreateTaskButton />
      <ActiveTaskList />
      <DoneTaskList />
    </div>
  );
};

export default connect()(TaskList);
