import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// импортируем сюда свои редюсеры
import sessionLoginReducers from './sessionLogin/sessionLoginReducers';
import modalsReducers from './modalsReducers';
import * as dashboardReducers from './Dashboard/DashboardReducers';
import { errorModalCongratsReducer } from './ModalCongrats/ModalCongratsReducers';
import { modalCreateGoalsErrorsReducers } from './ModalCreateGoal/ModalCreateGoalReducers';
import { modalAddTaskErrorsReducer } from './ModalAddTask/ModalAddTaskReducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionLoginReducers),
  goal: dashboardReducers.goalReducer,
  tasks: dashboardReducers.tasksReducer,
  modals: modalsReducers,
  idForDeleteTask: dashboardReducers.idForDeleteTaskReducer,
  errorsModalDelete: dashboardReducers.errorsModalDeleteReducer,
  isLoading: dashboardReducers.isLoadingReducer,
  dashboardErrors: dashboardReducers.errorsReducer,
  modalCongratsError: errorModalCongratsReducer,
  modalCreateGoalsErrors: modalCreateGoalsErrorsReducers,
  modalAddTaskErrors: modalAddTaskErrorsReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(enhancer),
);
export const persistor = persistStore(store);
