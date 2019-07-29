import {FETCH_ANIMAL} from "../actions";

export default function (state = [], action) {



    switch (action.type) {
        case FETCH_ANIMAL:
            return [action.payload.data, ...state];
    }
    return state;


}