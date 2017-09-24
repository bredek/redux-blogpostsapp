import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts?key=secpretsanta54321';

export function fetchPosts() {

    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}