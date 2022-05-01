import { combineReducers } from '@reduxjs/toolkit'

import { reducer as contactReducer } from '@/slices/contact'

const rootReducer = combineReducers({
  contacts: contactReducer
})

export default rootReducer
