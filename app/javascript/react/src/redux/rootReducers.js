import { combineReducers } from '@reduxjs/toolkit';
import messageLists from './welcome/greetingsSlice'

const rootReducer = combineReducers({
  Lists: messageLists,
});

export default rootReducer;
