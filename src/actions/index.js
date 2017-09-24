import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

const API_KEY = '?key=123';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts?key=123';
const FETCH_URL = 'http://reduxblog.herokuapp.com/api/posts/';

export function fetchPosts() {

    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {

    const request = axios.post(ROOT_URL, values).then( () => {
        callback()
    });

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {

    const request = axios.get(`${FETCH_URL}${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}