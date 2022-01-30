
import {Grid} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux'
import { Typography,TextField,Button,Chip } from '@mui/material';
import React, { useState } from 'react';
import * as Action from '../actions/index';


function Header() {
    const images = useSelector((state) => state.reducer.images);
    console.log(images);
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const handleAdd = (u)=>{
        dispatch(Action.getData(url));
    }
  return (
    <div>
       <Grid container spacing={2} style={{margin:'5px'}}>
       <Grid item xs={12}>
               <Typography variant="h3">
                   Media Scraper
               </Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField
          
          id="standard-error-helper-text"
          label="Url"
          fullWidth
          helperText="Enter Url"
          variant="standard"
          onChange={(e)=>{
              setUrl(e.target.value);   
          }}
        />
        </Grid>
       
       <Grid item xs={2}>
       <Button variant="outlined" onClick = {(e)=>{
           handleAdd(e.target.value);
       }}>Scrape</Button>
        </Grid>
       </Grid>
    
    </div>
  );
}

export default Header;