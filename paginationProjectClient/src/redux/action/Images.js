import axios from "axios";
//get all data from api 
export const saveAllData = (allData) => {
    return {
        type: "SAVE_ALL_DATA",
        payload: allData
    }
}
//get current data to show
export const savaCurrentData = (currentData) => {
    return {
        type: "SAVE_CURRENT_DATA",
        payload: currentData
    }
}
export const saveSortArr = (sortArr) => {
    return {
        type: "SAVE_SORT_ARR",
        payload: sortArr
    }
}
//save currentPage
export const savePage = (page) => {
    
    return {
        type: "SAVE_PAGE",
        payload: page
    }
}
