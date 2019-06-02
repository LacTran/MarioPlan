import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'; // connect redux with firestore
import { firebaseReducer } from 'react-redux-firebase'; //connect redux with firebase in general, including authenticating


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;