import { configureStore } from '@reduxjs/toolkit'

import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux'

import rootReducer from './rootReducer'

export const useSelector = useReduxSelector

export const useDispatch = () => useReduxDispatch()

export default configureStore({
  reducer: rootReducer
})
