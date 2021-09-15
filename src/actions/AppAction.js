import {
    UPDATE_ACTIVE_COUNTRY,
} from './types';

export const updateActiveCountry=(x)=>{
    return (dispatch)=>{
        dispatch({type:UPDATE_ACTIVE_COUNTRY,payload:x})
    }
}