const initialState ={
    items: []
}

const GET_DATA = "GET_DATA"

export const getData = (items) =>({
    type: GET_DATA,
    payload: items
})

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                items:action.payload
            };
        default:
            return state;
    }
}

export default reducer 