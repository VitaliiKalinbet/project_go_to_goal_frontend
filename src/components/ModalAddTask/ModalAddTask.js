import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { postSuccess } from '../../redux/ModalAddTask/ModalAddTaskOperations';
import style from './ModalAddTask.module.css';
import modalPresent from '../../assets/images/modal_present.png';
import * as dashBoardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as getTaskError from '../../redux/ModalAddTask/ModalAddTaskSelectors';

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
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { postfunc, token } = this.props;
    const { inputValue, inputPoint, selectData } = this.state;

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
    });
  };

  onChangeSelect = opt => {
    this.setState({
      selectData: opt.value,
    });
  };

  render() {
    const { inputValue, inputPoint, selectData } = this.state;
    const { errorTask } = this.props;
    return (
      <div className={style.modal_title}>
        <div className={style.modal_container}>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <p className={style.title_form}>Що зробити?</p>
            <input
              maxLength="20"
              minLength="3"
              name="inputValue"
              type="text"
              className={style.input_task}
              placeholder="Постав собі задачу"
              value={inputValue}
              onChange={this.handleChange}
              required
            />
            <div className={style.input_options_section}>
              <Select
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
                    <p className={style.errorParagraph}>Заповни поле Select</p>
                  ),
              )}
              {errorTask.map(
                el =>
                  el.includes('50') && (
                    <p className={style.errorParagraphServer}>
                      Сервер спить. Завітай пізніше
                    </p>
                  ),
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
          <img className={style.price} src={modalPresent} alt="present" />
        </div>
      </div>
    );
  }
}

ModalAddTask.propTypes = {
  postfunc: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  errorTask: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapDispatchToProps = dispatch => ({
  postfunc: (task, token) => dispatch(postSuccess(task, token)),
});

const mapStateToProps = store => ({
  token: dashBoardSelectors.getToken(store),
  errorTask: getTaskError.getTaskError(store),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddTask);
