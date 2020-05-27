import axios from 'axios';

export const getPeoples = url => ({
    type: 'GET_PEOPLES',
    payload: axios.get(url)
})