import { UPDATE_PAGE_NUMBER } from "../types/productTypes"

export const updatePage = (payload) => {
    return {type: UPDATE_PAGE_NUMBER, payload: payload}
}