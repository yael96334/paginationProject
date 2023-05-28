import axios from 'axios'
import { saveAllData, savaCurrentData, saveSortArr } from '../redux/action/Images';
const baseUrl = "http://localhost:4500/"
// function get category(default food)and dispatch data to global state in react (use redux)
export const getAll = (category = 'food') => {
  return (dis) => {
    axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`).
      then(suc => {
        dis(saveAllData(suc.data.hits))
        dis(getDataByPage(suc.data.hits, 0))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
// after i got all data this function call to server function that implements pagination
// and save the current page in redux
export const getDataByPage = (arr, page, selectedPage) => {
console.log(arr, page, selectedPage);
  return async (dispatch) => {
    try {
      const result = await axios
        .post(baseUrl + 'pagination', {
          data: {
            arr: arr,
            page: page,
            selectedPage: selectedPage || null,// can be null in first call
            limit: 9
          }
        })
      dispatch(savaCurrentData(result.data));
    }
    catch (e) {
      console.log(e);
    }
  }
}
export const sortByValue = (value, arr) => {
  console.log("bbb", arr, value);
  return async (dispatch) => {
    try {
      const arrSort = await axios.get(baseUrl + `sort/sortBy/${value}`,
        {
          params: {
            arr: arr
          }
        }
      )
      dispatch(saveSortArr(arrSort.data));
    }
    catch (e) {
      console.log(e);
    }
  }
}

