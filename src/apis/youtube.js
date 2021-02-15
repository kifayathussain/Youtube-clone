import axios from 'axios';


const KEY = 'AIzaSyCGsV5Vst3N3cqCHEIkKEpqk1dy-iPLXoo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxReaults:10,
        key:KEY
    }

});

