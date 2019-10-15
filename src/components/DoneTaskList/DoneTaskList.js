import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoneTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import { ReactComponent as ArrowUp } from '../../assets/icons/up-arrow.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

class DoneTaskList extends Component {
  state = {
    showCloseButton: false,
  };

  loadModeDoneTasks = () => {
    this.setState(prevState => ({
      showCloseButton: !prevState.showCloseButton,
    }));
  };

  render() {
    const { donePosts } = this.props;
    const { showCloseButton } = this.state;

    return (
      <>
        {donePosts.length > 0 && (
          <h2 className={styles.blocksTitles}>Виконано</h2>
        )}

        <ul className={styles.doneCards}>
          {showCloseButton
            ? [...donePosts]
                .reverse()
                .map(donePost => <Card key={donePost._id} task={donePost} />)
            : [...donePosts]
                .reverse()
                .slice(0, 8)
                .map(donePost => <Card key={donePost._id} task={donePost} />)}
        </ul>
        <div className={styles.buttonBlock}>
          {donePosts.length > 8 ? (
            <button
              type="button"
              className={styles.button}
              onClick={this.loadModeDoneTasks}
            >
              {showCloseButton ? <ArrowUp /> : <ArrowDown />}
            </button>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

DoneTaskList.propTypes = {
  donePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  donePosts: TaskListSelectors.getDonePosts(store),
});

export default connect(mapStateToProps)(DoneTaskList);
