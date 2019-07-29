import axios from 'axios';

const ROOT_URL = 'https://api.thedogapi.com/v1/images/search';

export const FETCH_ANIMAL = 'FETCH_ANIMAL';


export function fetchAnimals(event) {

    const url = ROOT_URL;
    const request = axios.get(url);

    return {
        type: FETCH_ANIMAL,
        payload: request
    }
};
