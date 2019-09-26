import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardBodyActive from '../CardBodyActive/CardBodyActive';
import CardBodyDone from '../CardBodyDone/CardBodyDone';
import CardFooter from '../CardFooter/CardFooter';

class Card extends Component {
  static propTypes = {
    task: PropTypes.shape({
      inActive: PropTypes.bool.isRequired,
      isDone: PropTypes.bool.isRequired,
      isComplete: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
      dateFinished: PropTypes.string,
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isDone: false };
  }

  handleCheckedToggle = () => {
    this.setState(prevState => ({
      isDone: !prevState.isDone,
    }));
  };

  render() {
    const { task } = this.props;
    const dateStarted = task.createdAt;
    const dateFinished = new Date(dateStarted).toLocaleDateString('ru');
    return (
      <li className={styles.cardLi}>
        {task.inActive ? (
          <CardBodyActive
            isDone={task.isComplete}
            points={task.points}
            _id={task._id}
          />
        ) : (
          <CardBodyDone
            isDone={task.isComplete}
            points={task.points}
            dateFinished={dateFinished}
          />
        )}
        <CardFooter title={task.title} deadline={task.deadline} />
      </li>
    );
  }
}

export default Card;
