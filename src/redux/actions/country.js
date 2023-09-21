import * as constants from "./constants";
import axios from "axios";

export const getCountriesList = (data) => {
  return async (dispatch) => {
    try {
      let url = `https://api.dev.pastorsline.com/api/contacts.json?companyId=${data.companyId}&page=${data.page}&noGroupDuplicates=${data.noGroupDuplicates}`;
      if (data.countryId) {
        url += `&countryId=${data.countryId}`;
      }
      if (data.query) {
        url += `&query=${data.query}`;
      }
      let response = await axios.get(url);
      dispatch({
        type: constants.GET_CONTACTS_LIST_SUCCESS,
        countries: response.data,
      });
    } catch (error) {
      dispatch({
        type: constants.GET_CONTACTS_LIST_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
