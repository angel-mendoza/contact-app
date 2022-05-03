import { createSlice } from '@reduxjs/toolkit'
import API from '@/utils/axios'

const INITIAL_STATE = {
  count: 0,
  currentPage: 1,
  perPage: 0,
  results: [],
  contactSelected: null,
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
    setContactSelected: (state, action) => {
      state.contactSelected = action.payload
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

export const editContact = (params) => async (dispatch) => {
  dispatch(slice.actions.initialiceValvye())
  dispatch(slice.actions.initLoading())
  try {
    const response = await API.put(`/contacts/${params.id}`, params.data)
    dispatch(slice.actions.endLoading())
    return response
  } catch (err) {
    dispatch(slice.actions.setError(formatedErrors(err)))
    dispatch(slice.actions.endLoading())
    return err
  }
}

export const removeContact = (params) => async (dispatch) => {
  dispatch(slice.actions.initialiceValvye())
  try {
    await API.delete(`/contacts/${params}`)
    dispatch(slice.actions.setMessage({ severity: 'success', data: 'contact successfully eliminated' }))
  } catch (err) {
    dispatch(slice.actions.setMessage({ severity: 'error', data: 'There was an error deleting the contact, try again later.' }))
  }
}

export const getOneContact = (params) => async (dispatch) => {
  dispatch(slice.actions.initialiceValvye())
  dispatch(slice.actions.initLoading())
  try {
    const response = await API.get(`/contacts/${params}`)
    dispatch(slice.actions.setContactSelected(response.data))
  } catch (err) {
    dispatch(slice.actions.setError(err))
  }
  dispatch(slice.actions.endLoading())
}

export const setMessageContact = (params) => (dispatch) => {
  dispatch(slice.actions.setMessage(params))
}

export const setContactSelected = (params) => (dispatch) => {
  dispatch(slice.actions.setContactSelected(params))
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
