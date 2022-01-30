
import {Grid} from '@mui/material';
import { useSelector } from 'react-redux'


function Images() {
    const images = useSelector((state) => state.reducer.images)
    console.log(images);

    
  return (
    <div>
       <Grid container spacing={2} style={{margin:'5px'}}>
           {images.map((v,index)=>{
               return (<Grid item xs={4} key={index} spacing={2}>
                <img src={v} alt=''/>
            </Grid>);
           })}


       </Grid>
    
    </div>
  );
}

export default Images;