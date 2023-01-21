const { createSlice } = require("@reduxjs/toolkit")

const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        getMycart(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload
        },
    }
})

export const {getMycart , setStatus, removeMyCart} = productSlice.actions;
export default productSlice.reducer;

//Thunks for async calls

export function fetchproduct() {
    return async function fetchproductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            let config = {
                'Content-Type': 'Application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
            fetch(
                'http://localhost:5000/user/mycart', {
                method: 'GET',
                headers: config
            }
            )
                .then(response => response.json())
                .then(data => {
                    dispatch(getMycart(data))
                });
                dispatch(setStatus(STATUS.IDLE))

        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}


