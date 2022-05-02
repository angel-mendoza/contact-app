import { createSlice } from '@reduxjs/toolkit'
import API from '@/utils/axios'

const INITIAL_STATE = {
  count: 0,
  currentPage: 1,
  perPage: 0,
  results: [],
  totalPages: 0,
  loading: false,
  error: null,
  message: null
}

const slice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    initialiceValvye: state => {
      state.message = null
      state.error = null
      state.loading = false
    },
    initLoading: state => {
      state.loading = true
    },
    endLoading: state => {
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
    setContacts: (state, action) => {
      const { count, currentPage, perPage, results, totalPages } = action.payload
      state.count = count
      state.currentPage = currentPage
      state.perPage = perPage
      state.results = results
      state.totalPages = totalPages
    }
  }
})

export const reducer = slice.reducer

export const getContact = (params) => async (dispatch) => {
  dispatch(slice.actions.setError(null))
  dispatch(slice.actions.initLoading())
  try {
    const response = await API.get(`/contacts?page=${params}`)
    dispatch(slice.actions.setContacts(response.data))
  } catch (err) {
    dispatch(slice.actions.setError(err))
  }
  dispatch(slice.actions.endLoading())
}

export const createContact = (params) => async (dispatch) => {
  dispatch(slice.actions.initialiceValvye())
  dispatch(slice.actions.initLoading())
  try {
    const response = await API.post('/contacts', params)
    dispatch(slice.actions.endLoading())
    return response
  } catch (err) {
    dispatch(slice.actions.setError(formatedErrors(err)))
    dispatch(slice.actions.endLoading())
    return err
  }
}

export const setMessageContact = (params) => (dispatch) => {
  dispatch(slice.actions.setMessage(params))
}

const formatedErrors = (error) => {
  switch (error.request.status) {
    case 400: {
      const errorsList = error.response.data.data.errors
      return Object.values(errorsList)[0]
    }

    case 422:
      return error.response.data.message

    default:
      return error.message
  }
}

export default slice
