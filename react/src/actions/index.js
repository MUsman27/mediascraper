import axios from 'axios';

export function getData(urll) {
	return (dispatch) => {

        console.log(urll);
        
        axios.post('http://localhost:4000/scraper',{url:urll,code:'123'}).then(res => {
            dispatch({
                type: 'GET_URLS',
                payload:{
                    vedios:res.data.vedios,
                    images:res.data.images,
                }
            });
        }).catch(err => {
            console.log(err);
        });


	};
}