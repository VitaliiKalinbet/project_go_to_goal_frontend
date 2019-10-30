/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { postSuccess } from '../../redux/ModalAddTask/ModalAddTaskOperations';
import style from './ModalAddTask.module.css';
import * as dashBoardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as getTaskError from '../../redux/ModalAddTask/ModalAddTaskSelectors';
import { cleanModalTask } from '../../redux/ModalAddTask/ModalAddTaskActions';

const keyelement = shortid.generate();
const options = [
  { value: '8.00-10.00', label: '8.00-10.00' },
  { value: '10.00-12.00', label: '10.00-12.00' },
  { value: '12.00-14.00', label: '12.00-14.00' },
  { value: '14.00-16.00', label: '14.00-16.00' },
  { value: '16.00-18.00', label: '16.00-18.00' },
  { value: '18.00-20.00', label: '18.00-20.00' },
  { value: '20.00-22.00', label: '20.00-22.00' },
];

const findOption = value => options.find(opt => opt.value === value);

class ModalAddTask extends Component {
  state = {
    inputValue: '',
    inputPoint: '',
    selectData: '',
    isEnterTime: false,
    timeError: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { postfunc, token } = this.props;
    const { inputValue, inputPoint, selectData, isEnterTime } = this.state;

    if (isEnterTime) {
      postfunc(
        {
          title: inputValue,
          description: 'task descr',
          points: inputPoint,
          deadline: selectData,
          dates: [new Date().toISOString()],
        },
        token,
      );

      this.setState({
        inputValue: '',
        inputPoint: '',
        selectData: '',
        isEnterTime: false,
        timeError: '',
      });
    } else {
      this.setState({
        timeError: 'Введіть проміжок часу',
      });
    }
  };

  onChangeSelect = opt => {
    this.setState({
      selectData: opt.value,
      isEnterTime: true,
      timeError: '',
    });
  };

  render() {
    const { inputValue, inputPoint, selectData, timeError } = this.state;
    const { errorTask, clearModal, modalAddTaskErrors } = this.props;
    return (
      <div className={style.modal_container}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <p className={style.title_form}>Що зробити?</p>
          <input
            maxLength="20"
            minLength="3"
            name="inputValue"
            type="text"
            className={style.input_task}
            placeholder="Напиши завдання"
            value={inputValue}
            onChange={this.handleChange}
            required
          />
          <div className={style.input_options_section}>
            <Select
              required
              className={style.input_options}
              value={findOption(selectData)}
              options={options}
              onChange={this.onChangeSelect}
            >
              Час
            </Select>
            {errorTask.map(
              el =>
                el.includes('40') && (
                  <p key={keyelement} className={style.errorParagraph}>
                    Вибачте, але ви вiдправили некоректнi даннi...
                  </p>
                ),
              modalAddTaskErrors.length > 0 ? clearModal() : null,
            )}
            {timeError && <p className={style.errorParagraph}>{timeError}</p>}

            {errorTask.map(
              el =>
                el.includes('50') && (
                  <p className={style.errorParagraphServer}>
                    Вибачте, але у нас виникли деякi труднощi. Спробуйте
                    пiзнiше...
                  </p>
                ),
              modalAddTaskErrors.length > 0 ? clearModal() : null,
            )}
            <input
              name="inputPoint"
              type="number"
              max="1000"
              min="1"
              value={inputPoint}
              onChange={this.handleChange}
              className={style.input_options_input}
              placeholder="Винагорода"
              required
            />
          </div>
          <button type="submit" className={style.button}>
            OK
          </button>
        </form>
      </div>
    );
  }
}

ModalAddTask.propTypes = {
  postfunc: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  modalAddTaskErrors: PropTypes.any.isRequired,
  clearModal: PropTypes.func.isRequired,
  errorTask: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postfunc: (task, token) => dispatch(postSuccess(task, token)),
  clearModal: () => dispatch(cleanModalTask()),
});

const mapStateToProps = store => ({
  token: dashBoardSelectors.getToken(store),
  errorTask: getTaskError.getTaskError(store),
  modalAddTaskErrors: store.modalAddTaskErrors,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddTask);
