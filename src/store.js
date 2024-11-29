
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core"
import redus from "./reducers/reducer";
import rootSaga from "./sagas";



const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: 
    {count: redus},  // Use the slice reducer here or a combined reducer
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga)


export default store;