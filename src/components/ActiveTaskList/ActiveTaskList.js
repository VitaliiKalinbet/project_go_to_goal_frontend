/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ActiveTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import NewGoal from '../NewGoal/NewGoal';

class ActiveTaskList extends Component {
  state = {};

  render() {
    const { activePosts, getGoal } = this.props;

    if (getGoal === null) {
      return <NewGoal />;
    }

    if (activePosts.length === 0) {
      return (
        <>
          <h2 className={styles.dailyTasks}>Мої завдання:</h2>
          <h2 className={styles.blocksTitles}>Сьогодні</h2>
          <div className={styles.positionCards}>
            {/* <div className={styles.activeTaskCard} /> */}
            <div className={styles.activeTaskListSecretDiv}>
              <h2 className={styles.activeTask_title1}>
                Немає завдань? Тоді їх треба створити!
              </h2>
              <h2 className={styles.activeTask_title2}>
                Бачиш кнопку праворуч?
              </h2>
              <h2 className={styles.activeTask_title3}>Бачиш кнопку внизу?</h2>
              <p className={styles.text1}>
                Натискай її, вибирай, що і коли треба зробити і
                <b className={styles.text12}> вперед до цілі !</b>
              </p>

              <p className={styles.text1}>
                Пам'ятай, що бали нараховуються тільки за виконані завдання!
              </p>

              <p className={styles.text2}>
                Задачі остаточно переходять до нижнього розділу ВИКОНАНО
                наступного дня. До цього часу їх можна відмінити.
              </p>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <h2 className={styles.dailyTasks}>Мої завдання:</h2>
        <h2 className={styles.blocksTitles}>Сьогодні</h2>
        <ul className={styles.activeCards}>
          {activePosts.map(activePost => (
            <Card key={activePost._id} task={activePost} />
          ))}
        </ul>
      </>
    );
  }
}

ActiveTaskList.propTypes = {
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getGoal: PropTypes.shape(),
};

ActiveTaskList.defaultProps = {
  getGoal: null,
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  getGoal: dashboardSelectors.getGoal(store),
});

export default connect(mapStateToProps)(ActiveTaskList);
