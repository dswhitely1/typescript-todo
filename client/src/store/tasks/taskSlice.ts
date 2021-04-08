import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../components/TaskList';

interface TaskState {
  isLoading: boolean;
  isSuccess: boolean;
  errors: null | Error;
  showForm: boolean;
  tasks: ITask[];
}

const initialState: TaskState = {
  isLoading: false,
  isSuccess: false,
  errors: null,
  showForm: false,
  tasks: [
    {
      id: 1,
      title: 'Task One',
      description: 'Task One Description',
      completed: false,
      userId: 1,
    },
    {
      id: 2,
      title: 'Task Two',
      description: 'Task Two Description',
      completed: true,
      userId: 1,
    },
    {
      id: 3,
      title: 'Task Three',
      description: 'Task Three Description',
      completed: false,
      userId: 1,
    },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    start(state) {
      if (!state.isLoading) state.isLoading = true;
      if (state.errors) state.errors = null;
      if (state.isSuccess) state.isSuccess = false;
    },
    getTasksSuccess(state, action: PayloadAction<ITask[]>) {
      if (state.isLoading) state.isLoading = false;
      if (!state.isSuccess) state.isSuccess = true;
      state.tasks = action.payload;
    },
    updateTaskSuccess(state, action: PayloadAction<ITask>) {
      if (state.isLoading) state.isLoading = false;
      if (!state.isSuccess) state.isSuccess = true;
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    changeTaskStatus(state, action: PayloadAction<Number>) {
      if (state.isLoading) state.isLoading = false;
      if (!state.isSuccess) state.isSuccess = true;
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    },
    createTaskSuccess(state, action: PayloadAction<ITask>) {
      if (state.isLoading) state.isLoading = false;
      if (!state.isSuccess) state.isSuccess = true;
      state.tasks.push(action.payload);
    },
    deleteTaskSuccess(state, action: PayloadAction<Number[]>) {
      if (state.isLoading) state.isLoading = false;
      if (!state.isSuccess) state.isSuccess = true;
      state.tasks = state.tasks.filter(
        (task) => action.payload.indexOf(task.id) === -1
      );
    },
    error(state, action: PayloadAction<Error>) {
      if (state.isLoading) state.isLoading = false;
      if (state.isSuccess) state.isSuccess = false;
      state.errors = action.payload;
    },
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
  },
});

export const {
  start,
  error,
  createTaskSuccess,
  deleteTaskSuccess,
  getTasksSuccess,
  updateTaskSuccess,
  changeTaskStatus,
  toggleForm,
} = taskSlice.actions;

export default taskSlice.reducer;
