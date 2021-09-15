import{
    UPDATE_ACTIVE_COUNTRY
} from '../actions/types'

const INITIAL_STATE={
    activeCountry:{}
}
export default(state = INITIAL_STATE, action) => {
    switch (action.type){
      case UPDATE_ACTIVE_COUNTRY:
        return { ...state,
            activeCountry: action.payload
        };
    default:
        return state;
    }
};