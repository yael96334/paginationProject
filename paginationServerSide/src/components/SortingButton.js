import * as React from 'react';
import {InputLabel,MenuItem,FormControl} from '@mui/material';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { sortByValue } from '../api/ImagesApi';
// select button to choose key for sort
export default function SelectVariants() {
  const imagesList = useSelector(state => state.i.currentData)
  const dis = useDispatch()

  const sort=(e)=>{
    e.preventDefault();
 dis(sortByValue(e.target.value,imagesList))
  }
  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label" >Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={sort}
          label="Sorting By Key"
          
        >
          <MenuItem value="id">id</MenuItem>
          <MenuItem value="user">user</MenuItem>
          <MenuItem value="likes">likes</MenuItem>
        </Select>
      </FormControl>
  
    </div>
  );
}