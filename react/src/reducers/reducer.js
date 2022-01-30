const initialState = {
 images:[],
 videos:[]   
}

const reducer = (state = initialState, action)=>{
    switch(action?.type)
    {
        case 'GET_URLS': return {
            ...state,
            videos: action.payload.vedios,
            images: action.payload.images,
        };
        default: return initialState;
    }
}

export default reducer;