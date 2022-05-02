import { createSlice } from '@reduxjs/toolkit'
// import API from '@/utils/axios'

const INITIAL_STATE = {
  count: 0,
  currentPage: 1,
  perPage: 0,
  results: [],
  totalPages: 0,
  loading: false,
  error: null
}

const slice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    initLoading: state => {
      state.loading = true
    },
    endLoading: state => {
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
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
  try {
    // const response = await API.get(`/contacts?page=${params}`)
    // dispatch(slice.actions.setContacts(response.data))
    dispatch(slice.actions.setContacts(INITIAL_STATE))
  } catch (err) {
    dispatch(slice.actions.setError(err))
  }
  dispatch(slice.actions.endLoading())
}

export default slice
