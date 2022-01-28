import { UPDATE_FILTER_OPTIONS } from "../types/productTypes"

export const updateFilterOptions = (payload) => {
    return {type: UPDATE_FILTER_OPTIONS, payload: payload}
}