import { createSlice } from '@reduxjs/toolkit'

const selectedCategorySlice = createSlice({
    name: 'selectedCategory',
    initialState: {
        entities: null
    },
    reducers: {
        setCategory(state, action) {
            state.entities = action.payload
        }
    }
})

const { actions, reducer: selectedCategoryReducer } = selectedCategorySlice
const { setCategory } = actions

export const setSelectedCategory = payload => dispatch => {
    dispatch(setCategory(payload))
}

export default selectedCategoryReducer
