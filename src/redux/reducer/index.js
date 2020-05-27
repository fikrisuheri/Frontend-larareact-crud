import People from './people';
import Alert from './alert';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    listPeople : People,
    stateAlert : Alert
})

export default rootReducers