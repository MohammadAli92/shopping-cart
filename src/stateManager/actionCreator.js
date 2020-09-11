export const ACTIONS = {
    GET_INIT_DATA: 'GET_INIT_DATA'
}

// export const getInitData = (data) => ({type: ACTIONS.GET_INIT_DATA, payload:data})
export const getInitData = (data) => {
    return (dispatch, getState)=>{
        dispatch({type: 'LOADING'})
        dispatch({type: ACTIONS.GET_INIT_DATA, payload:data})
        console.log(getState())
    }
}