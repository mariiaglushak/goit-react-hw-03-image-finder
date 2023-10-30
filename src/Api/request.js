import axios from 'axios';

// const KEY = "29950518-736902d68f4527d7af6cdbde5";
const SanyaKey = "29932644-4e0f39fd65af4cced23d22843";
export const requestFetch = (query, page) => {
   return axios.get(`https://pixabay.com/api/?key=${SanyaKey}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    // return data
};