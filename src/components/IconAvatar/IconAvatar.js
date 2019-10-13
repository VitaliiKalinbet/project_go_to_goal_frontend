/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './IconAvatar.module.css';

const pictures = [
  'https://go-to-goal.goit.co.ua/image/avatar_001.png',
  'https://go-to-goal.goit.co.ua/image/avatar_002.png',
  'https://go-to-goal.goit.co.ua/image/avatar_003.png',
  'https://go-to-goal.goit.co.ua/image/avatar_004.png',
  'https://go-to-goal.goit.co.ua/image/avatar_005.png',
  'https://go-to-goal.goit.co.ua/image/avatar_006.png',
  'https://go-to-goal.goit.co.ua/image/avatar_007.png',
  'https://go-to-goal.goit.co.ua/image/avatar_008.png',
];

class IconsAvatar extends Component {
  static propTypes = {
    changeAvatar: PropTypes.func.isRequired,
  };

  state = {
    avatar: 'https://go-to-goal.goit.co.ua/image/avatar_001.png',
  };

  componentDidMount() {
    const { avatar } = this.state;
    const { changeAvatar } = this.props;
    changeAvatar(avatar);
  }

  componentDidUpdate(prevProps, prevState) {
    const { avatar } = this.state;
    const { changeAvatar } = this.props;
    if (avatar === prevState.avatar) return;
    changeAvatar(avatar);
  }

  changeUserPic = e => {
    this.setState({ avatar: e.target.src });
  };

  render() {
    const { avatar } = this.state;

    return (
      <div className={styles.avatar_choose}>
        <img src={avatar} alt="user_pic" className={styles.user_avatar_big} />
        <p className={styles.avatar_txt}>Обери собi аватарку:</p>
        <div className={styles.avatar_little_div} onClick={this.changeUserPic}>
          {pictures.map(picture => (
            <img
              key={picture}
              src={picture}
              alt="user_pic"
              className={
                avatar === picture ? styles.active : styles.user_avatar_small
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default IconsAvatar;
