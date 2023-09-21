import * as constants from '../../actions/constants';
const initialState = {
  contacts: {},
  contacts_ids: []
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.GET_CONTACTS_LIST_SUCCESS:
        return { ...state, contacts: {...state.contacts, ...action.countries?.contacts}, contacts_ids: action.countries?.contacts_ids || [] };  
        case constants.GET_CONTACTS_LIST_FAILURE:
        return { ...state,  }; 
      default:
        return state;
    }
  };
  
  export default contactReducer;