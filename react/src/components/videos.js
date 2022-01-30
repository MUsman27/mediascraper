
import {Grid} from '@mui/material';
import { useSelector } from 'react-redux'

function Videos() {
    const videos = useSelector((state) => state.reducer.videos);
    console.log(videos);
  return (
    <div>
       <Grid container spacing={2} style={{margin:'5px'}}>
           {videos && videos.map((v,index)=>{
               return (<Grid item xs={12} key={index}>
            <iframe width="1280" height="640" src={v} title={index}></iframe>
            </Grid>);
           })}


       </Grid>
    
    </div>
  );
}

export default Videos;