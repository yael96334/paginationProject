// global state
const initialization = {
    arrData: [],
    currentData: [],
    disabledNext: false,
    disabledPrev: true,
    page: 0,
}
export const imagesReducer = (state = initialization, action) => {
    switch (action.type) {
        case "SAVE_ALL_DATA":
            {
                return {
                    ...state,
                    arrData: action.payload
                }
            }
        //save all data from the server
        case "SAVE_CURRENT_DATA":
            return {
                ...state,
                currentData: action.payload.results,
                disabledNext: action.payload.disabledNext,
                disabledPrev: action.payload.disabledPrev,
                page: action.payload.page,

            }
        case "SAVE_SORT_ARR":
            return {
                ...state,
                currentData: action.payload

            }
        case "SAVE_PAGE":
          
            return {
                ...state,
                page: action.payload
            }
        default: return { ...state }
    }
}