import { createSlice } from '@reduxjs/toolkit'

const selectCategorySlice = createSlice({
    name: 'selectCategory',
    initialState: {
        selectedCategory: null
    },
    reducers: {
        setCategory(state, action) {
            state.selectedCategory = action.payload
        }
    }
})

const { actions, reducer: selectCategoryReducer } = selectCategorySlice
const { setCategory } = actions

export const setSelectedCategory = payload => dispatch => {
    dispatch(setCategory(payload))
}
export default selectCategoryReducer
