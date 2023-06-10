import { configureStore } from 'redux';
import messagesSlice from './messagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesSlice,
  },
});

export default store;
