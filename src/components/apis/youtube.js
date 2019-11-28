import axios from 'axios'
const KEY = `AIzaSyAPBICv_uGuQK7cmn9bHStrgkkGyPIEO0w`;


export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params:{
        part:`snippet`,
        maxResults:10,
        key: KEY
    }
})