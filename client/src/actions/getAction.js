import {GET_NUMBER_BASKET}  from './types';


export const getNumbers = () =>{
    return (dispatch) =>{
        console.log("getting number in basket ");
        dispatch({
            type: GET_NUMBER_BASKET
        }) 
}
}
