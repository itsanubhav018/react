import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice';

//object hi leta hai
export const store = configureStore({


    reducer : todoReducer

});