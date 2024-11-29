import { all, call, put, takeEvery, take } from 'redux-saga/effects';
import  {addPost, updateImage, deleteImage}  from './reducers/reducer'; 
import axios from 'axios';



function* helloSaga() {
  try {
   
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/albums/1/photos");
    const fetchmusic = response.data.slice(0, 15);
    yield put(addPost(fetchmusic)); 

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



function* addImageSaga(action) {
  try {
    // Use Axios to POST new data
    const response = yield call(axios.post, "https://jsonplaceholder.typicode.com/albums/1/photos", action.payload);
    const fetchmusic = response.data;
    // You could dispatch an action to add the new image to your state if needed
    yield put(addPost([fetchmusic]));  // Dispatch action to add the newly created image to Redux state
    
  } catch (error) {
    console.error('Error adding image:', error);
  }
}

// update 

function* updateImageSaga(action) {
  try {
    const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/photos/${action.payload.id}`, action.payload);
    yield put(updateImage(response.data)); // Dispatch action to update the image in Redux state
  } catch (error) {
    console.error('Error updating image:', error);
  }
}

// delete 
function* deleteImageSaga(action) {
  console.log("deleteImageSaga triggered with payload:", action.payload);
  try {
    // Simulate deletion
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/photos/${action.payload}`);
    yield put(deleteImage(action.payload)); // Update the local state
  } catch (error) {
    console.error("Error in deleteImageSaga:", error);
  }
}



export function* watchHelloSaga() {
  // This will listen for the "HELLO_SAGA" action
  yield take('FETCH_IMAGES', helloSaga);
  yield call(helloSaga);
}
export function* watchAddImageSaga() {
  yield takeEvery('ADD_IMAGE', addImageSaga);
}
export function* watchUpdateImageSaga() {
  yield takeEvery('UPDATE_IMAGE', updateImageSaga);
}

export function* watchDeleteImageSaga() {
  yield takeEvery('DELETE_IMAGE', deleteImageSaga);
}


export default function* rootSaga() {
  yield all([
    watchHelloSaga(),
    watchAddImageSaga(),
    watchUpdateImageSaga(),
    watchDeleteImageSaga(), // Add all watcher sagas here
  ]);
}

