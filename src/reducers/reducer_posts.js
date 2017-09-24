import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, CREATE_POST} from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
            // return action.payload
            break;
        case FETCH_POST:
            console.log(action.payload.data);
            // key interpolation - [action.payload.data.id] will be the KEY
            return {...state, [action.payload.data.id]:action.payload.data};
            break;
        case CREATE_POST:
            return state;
            // return action.payload
            break;
        default:
            return state;
            break;
    }
}