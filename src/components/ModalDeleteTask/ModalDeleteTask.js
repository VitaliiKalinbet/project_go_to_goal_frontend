import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';
import { deleteTaskOperation } from '../../redux/ModalDeleteTask/ModalDeleteTaskOperations';
import {
  getIdForDeleteTaskSelector,
  getTaskDeleteError,
} from '../../redux/ModalDeleteTask/ModalDeleteTaskSelectors';
import style from './ModalDeleteTask.module.css';

const ModalDeleteTask = ({
  id,
  errorsModalDelete,
  deleteTask,
  onClose,
  token,
}) => {
  return (
    <div className={style.basicLightbox}>
      <div className={style.modalContent}>
        {!errorsModalDelete ? (
          <h2 className={style.h2}>
            Ви впевнені, що хочете видалити завдання?
          </h2>
        ) : (
          <h2 className={style.h2}>
            Вибачте за незручності. Виникли технічні труднощі. Спробувати ще?
          </h2>
        )}
        <div className={style.btnConteiner}>
          <button
            className={style.btn}
            type="button"
            onClick={() => deleteTask(id, token)}
          >
            ТАК
          </button>
          <button className={style.btn} type="button" onClick={() => onClose()}>
            НІ
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  id: getIdForDeleteTaskSelector(state),
  errorsModalDelete: getTaskDeleteError(state),
  token: state.session.token,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: (id, token) => dispatch(deleteTaskOperation(id, token)),
  onClose: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDeleteTask);

ModalDeleteTask.defaultProps = {
  id: null,
};

ModalDeleteTask.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.string,
};
