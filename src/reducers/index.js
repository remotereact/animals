import {combineReducers} from "redux";
import animalreducer from './reducer_animal';

const rootReducer = combineReducers({
    animal: animalreducer
});


export default rootReducer;